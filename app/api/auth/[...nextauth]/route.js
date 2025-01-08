import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";


export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbackUrl: `${process.env.NEXTAUTH_URL}/api/auth/callback/github`,
})

export { authoptions as GET, authoptions as POST }