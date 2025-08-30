import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import bcrypt from "bcrypt";
import { connectDB } from "../../../lib/DbConnection.js";
import User from "../../../models/User.js";

export const authOptions = {
  providers: [
    // ✅ Credentials login
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

    // ✅ Google OAuth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // ✅ GitHub OAuth
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // ✅ Discord OAuth
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: "identify email" } },
    }),
  ],

  callbacks: {
  async signIn({ user, account, profile }) {
    await connectDB();

    // let existingUser = await User.findOne({ email: user.email });

    // if (!existingUser) {
    //   // Create new user for OAuth
    //   const newUser = new User({
    //     username: profile?.name || user.name,
    //     email: user.email,
    //     image: user.image,
    //     provider: account.provider,
    //     role: null, // must choose later via /set-role
    //   });

    //   await newUser.save({ validateBeforeSave: false });

    //   // Mark user as new
    //   user.isNewUser = true;
    // } else {
    //   user.isNewUser = false;
    // }
    const existingUser = await User.findOne({ email: user.email });

  if (!existingUser) {
    // 🚨 Don't create user yet → redirect to /select-role
    return `/set-role?email=${encodeURIComponent(user.email)}&provider=${account.provider}&name=${encodeURIComponent(user.name || profile?.name)}`;
  }

  return true; // Returning user → proceed

  },

  async jwt({ token, user }) {
    await connectDB();
    if (user) {
      const dbUser = await User.findOne({ email: user.email });
      token.id = dbUser._id.toString();
      token.email = dbUser.email;
      token.username = dbUser.username;
      token.age = dbUser.age;
      token.country = dbUser.country;
      token.education = dbUser.education;
      token.role = dbUser.role;
      token.isNewUser = user.isNewUser ?? false;
    }
    return token;
  },

  async session({ session, token }) {
    await connectDB();
    const dbUser = await User.findOne({ email: session.user.email });

    session.user = {
      id: token.id,
      email: token.email,
      username: token.username,
      age: token.age,
      country: token.country,
      education: token.education,
      role: token.role,
      isNewUser: token.isNewUser,
    };

    return session;
  },

  // async redirect({ baseUrl, token }) {
  //   // 🚀 New users or users with no role → go to /set-role
  //   console.log("Redirecting user... : "+baseUrl+"-"+token)
  //   if (token?.isNewUser || !token?.role) {
  //     return `${baseUrl}/set-role`;
  //   }
  //   return baseUrl;
  // },

  async redirect({ url, baseUrl }) {
    // If signIn returned a relative path like /select-role → redirect there
    if (url.startsWith("/")) return `${baseUrl}${url}`;
    if (new URL(url).origin === baseUrl) return url;
    return baseUrl;
  },


},

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

// ✅ App Router style
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
