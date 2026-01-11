import { Google } from "arctic";

const REDIRECT_URI = "http://localhost:3000/api/google/callback";
const google = new Google(
  process.env.GOOGLE_CLIENT_ID!,
  process.env.GOOGLE_CLIENT_SECRET!,
  REDIRECT_URI
);

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code) return new Response("No code found");

  // validate your stored state & codeVerifier here
  const tokens = await google.validateAuthorizationCode(code, "YOUR_CODE_VERIFIER_HERE");

  return Response.json({
    accessToken: tokens.accessToken(),
    idToken: tokens.idToken(),
    refreshToken: tokens.refreshToken(),
  });
}
