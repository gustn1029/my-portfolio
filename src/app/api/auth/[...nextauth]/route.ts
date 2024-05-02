import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Credentials({
      credentials: {
        userName: {
          label: "UserName",
          type: "text",
          placeholder: "아이디를 입력하세요.",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: credentials?.userName,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    maxAge: 3600,
  },
  callbacks: {
    async jwt({ token, user }) {
      if(user.email !== undefined || user.email !== null || user.email !== "") {

        return { ...token, ...user };
      } else {
        return {};
      }
    },

    async session({ session, token }) {
      if (token.email !== undefined || token.email !== null || token.email !== "") {
        session.user = token as any;
      }

      return session;
    },
  },

  pages: {
    signIn: "/signin",
    signOut: "/#home",
  },
});

export { handler as GET, handler as POST };
