import { g as githubAuth, a as auth } from "../../../../../chunks/lucia.js";
import { r as redirect } from "../../../../../chunks/index.js";
import { _upsert } from "../_server.ts.js";
const GET = async ({ cookies, url, locals }) => {
  if (githubAuth === null) {
    return new Response(null, { status: 404 });
  }
  const code = url.searchParams.get("code");
  if (code === null || url.searchParams.get("state") !== cookies.get("state")) {
    throw redirect(302, "/");
  }
  try {
    const providerUserAuth = await githubAuth.validateCallback(code);
    const res = await fetch("https://api.github.com/user/emails", {
      headers: { Authorization: `Bearer ${providerUserAuth.githubTokens.accessToken}` }
    });
    const emails = await res.json();
    const email = emails.find((e) => e.primary);
    if (email === void 0 || !email.verified) {
      throw redirect(302, "/");
    }
    const id = await _upsert(providerUserAuth, email.email);
    const session = await auth.createSession({ userId: id, attributes: {} });
    locals.auth.setSession(session);
  } catch (e) {
    console.error(e);
  }
  throw redirect(302, "/");
};
export {
  GET
};
