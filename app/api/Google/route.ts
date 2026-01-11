import { generateCodeVerifier, generateState, Google } from "arctic";
import { NextResponse } from "next/server";

const redirect_uri = "http://localhost:3000/api/google/callback";

const google = new Google(
 process.env.GOOGLE_CLIENT_ID as string,
 process.env.GOOGLE_CLIENT_SECRET as string ,
 redirect_uri
);

export async function GET(request: Request) {
  const state = generateState();

  const coderverifier = generateCodeVerifier();

 const url = google.createAuthorizationURL(
    state,
    coderverifier,
    ["openid", "email", "profile"]
  );    

  return NextResponse.redirect(url);
 

}