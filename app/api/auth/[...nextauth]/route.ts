import NextAuth, { Account, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';

type CustomUser = User & { accessToken?: string }

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async signIn(params) {
      const { profile, account } = params as { user: CustomUser, account: Account, profile: GoogleProfile };

      try {
        const { email } = profile;

        console.log(process.env.API_BASE_URL)
        console.log(process.env.GOOGLE_CLIENT_ID)

        const response = await fetch(`${process.env.API_BASE_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            senha: 'pocEy#123'
          })
        });

        if (response.status === 200) {
          const token = response.headers.get('Authorization')?.split(' ')[1];
          account.access_token = token;

          return true;
        }

        return false;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async jwt(params) {
      const { token, account } = params as { token: JWT, user: User, account: Account };

      if (account) {
        token.accessToken = account.access_token
      }

      return token;
    },
    async session(params) {
      const { session, token } = params as { session: Session, token: JWT };
      session.user.accessToken = token.accessToken as string;

      return session;
    }
  },
  pages: {
    error: '/auth/error'
  }
})

export { handler as GET, handler as POST }