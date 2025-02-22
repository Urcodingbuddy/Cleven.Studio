import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      }),
    ],
    callbacks: {
      async session({ session, user }:any) {
        session.user.id = user.id;
        return session;
      },
    },
    pages: {
      signIn: "/signin", // Custom sign-in page
      signUp: "/signup"
    },
    secret: process.env.NEXTAUTH_SECRET,
  };
  

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };