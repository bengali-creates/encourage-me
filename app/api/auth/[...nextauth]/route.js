import mongoose from "mongoose"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import User from "@/models/User"
import {Payment} from "@/models/Payment"
import { useSession, signIn, signOut } from "next-auth/react"
import connectDb from "@/db/connetdb"

//  const { data: session } = useSession()

const handler= NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    
    if (account.provider === 'github') {
      await connectDb();
      // Check if the user already exists in the database
      const existingUser = await User.findOne({ email: user.email });
      if( !existingUser ) {
        // Create a new user if it doesn't exist
        const newUser = await User.create({
          name: user.name,
          username: profile.login,
          email: user.email,
          profileimage: user.image,
          
        });
        console.log("New user created:", newUser);
      }
    }
    return true;
  }
  
  },
  } )
export {handler as GET, handler as POST}