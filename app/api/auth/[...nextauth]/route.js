import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import bcrypt from "bcrypt";
import { connectDB } from "@/app/lib/DbConnection";
import User from "@/app/models/User";

export const authOptions = {
  providers: [
    // Credentials login
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("No user found");

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isPasswordValid) throw new Error("Invalid password");

        return {
          id: user._id.toString(),
          name: user.username,
          email: user.email,
          role: user.role,
        };
      },
    }),

    // Google OAuth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // GitHub OAuth
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // Discord OAuth
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: "identify email" } },
    }),
  ],

  callbacks: {
    // Runs at login (OAuth or credentials)
    async signIn({ user, account, profile }) {
      await connectDB();

      let existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        // Create new user for OAuth logins
        existingUser = new User({
          username: profile?.name || user.name,
          email: user.email,
          image: user.image,
          provider: account.provider,
          role: null, //  must choose later via /set-role
        });
        await existingUser.save();
      } else {
        console.log("👤 Existing user logged in:", existingUser.email, "role:", existingUser.role);
      }

      return true;
    },

    // Attach DB data into JWT
    async jwt({ token, user }) {
      await connectDB();
      if (user) {
        const dbUser = await User.findOne({ email: user.email });
        token.id = dbUser._id.toString();
        token.role = dbUser.role;
      }
      return token;
    },

    //Attach DB role into session
    async session({ session, token }) {
      await connectDB();
      const dbUser = await User.findOne({ email: session.user.email });

      session.user = {
        id: token.id,
        email: session.user.email,
        role: dbUser?.role || null,
      };
      return session;
    },

    // Redirect after login
    async redirect({ baseUrl, url }) {
      if (url === "/") {
        return `${baseUrl}/dashboard`;
      }
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

//  App Router style
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
