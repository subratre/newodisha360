import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

export const config = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    starategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const prisma = new PrismaClient();
        if (credentials === null) return null;

        //find user in database

        const user = await prisma.user.findFirst({
          where: { email: credentials.email },
        });

        if (user && user.password) {
          const isMatch = bcrypt.compareSync(
            credentials.password,
            user.password
          );

          if (isMatch) {
            return {
              id: user.guid,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async session({ session, user, trigger, token }) {
      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);

const handler = NextAuth(config);
export { handler as GET, handler as POST };
