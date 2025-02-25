import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        firstName: { label: "Fist-name", type: "text", placeholder: "John" },
        lastName: { label: "Last-name", type: "text", placeholder: "doe" },
        email: { label: "Email", type: "text", placeholder: "john@example.com" },
        password: { label: "Password", type: "password", placeholder: "password" },
        confirmPassword: { label: "confirmPassword", type: "password", placeholder: "password" }
      },
      async authorize(credentials, req): Promise<User | null> {

        const action = req.body?.action;

        if (action === "signin") {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required for sign-in");
          }
          const existingUser = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!existingUser) {
            throw new Error("No user found with this email");
          }

          if (!existingUser.password) {
            throw new Error("User account is missing a password");
          }

          const passwordMatch = await bcrypt.compare(credentials.password, existingUser.password);

          if (!passwordMatch) {
            throw new Error("Incorrect password");
          }

          return {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            imageUrl: existingUser.imageURL,
          }
        }

        if (action === "signup") {
          if (!credentials?.firstName || !credentials?.lastName || !credentials?.email || !credentials?.password || !credentials.confirmPassword) {
            throw new Error("All fields are required for sign-up");
          }

          if (credentials.password !== credentials.confirmPassword) {
            throw new Error("Password do not match")
          }

          const existingUser: any = await prisma.user.findUnique({
            where:{
              email: credentials?.email
            }
          })

          if (existingUser) {
            if (existingUser.email === credentials?.email) {
                throw new Error("Email already exists");
            }
          }

          if (credentials.password !== credentials.confirmPassword) {
            throw new Error("Password do not match");
          }
        

          const hashedPassword = await bcrypt.hash(credentials?.password, 10);
          const fullName = `${credentials.firstName} ${credentials.lastName}`;
          
            const newUser = await prisma.user.create({
              data:{
                name:fullName,
                email:credentials?.email,
                password:hashedPassword,
                auth_type:"credentials"
              }
            })
            return {name: newUser.name, id: newUser.id, email:newUser.email}
        }
        throw new Error("Invalid action");
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google" || account?.provider === "github") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              name: user.name!,
              email: user.email!,
              auth_type: account.provider === "google" ? "Google" : "Github",
              imageURL: profile?.avatar_url ?? profile?.picture ?? user.imageUrl ?? null,
            },
          });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
    async redirect({  baseUrl }: {  baseUrl: string }) {
      return baseUrl + '/workspace';
  }
  },


};
