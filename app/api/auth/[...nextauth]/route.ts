import NextAuth,{NextAuthOptions} from "next-auth"
import Googleprovider from "next-auth/providers/google"
export const authoptions:NextAuthOptions = {
providers: [

    Googleprovider({

        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
],

session: {
    strategy: "jwt",
},

secret: process.env.NEXTAUTH_SECRET,



};

const handler = NextAuth(authoptions)

export {handler as GET  , handler as POST}