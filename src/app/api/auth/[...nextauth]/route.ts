import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

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
  ],
  callbacks:   {
    async jwt({ token, user }) {
        return { ...token, ...user }
    },

    async session({ session, token }) {
        session.user = token as any;

        return session;
    }
  }
});

export { handler as GET, handler as POST };
