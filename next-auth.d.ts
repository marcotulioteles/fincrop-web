import { User as NextAuthUser } from 'next-auth';

interface User extends NextAuthUser {
  accessToken?: string;
}

declare module 'next-auth' {
  interface User extends User {}
}