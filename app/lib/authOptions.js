import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { connectDB } from "./DbConnection";
import User from "../models/User";

export const authOptions = {
  providers: [
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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      await connectDB();
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        return `/set-role?email=${encodeURIComponent(user.email)}&provider=${account.provider}&name=${encodeURIComponent(user.name || profile?.name)}`;
      }

      return true;
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

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },

  pages: {
    signIn: "/",
  },

  secret: process.env.NEXTAUTH_SECRET,
};