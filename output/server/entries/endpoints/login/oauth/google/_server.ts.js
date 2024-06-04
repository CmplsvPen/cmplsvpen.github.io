import { b as googleAuth, a as auth } from "../../../../../chunks/lucia.js";
import { r as redirect } from "../../../../../chunks/index.js";
import { _upsert } from "../_server.ts.js";
const GET = async ({ cookies, url, locals }) => {
  if (googleAuth === null) {
    return new Response(null, { status: 404 });
  }
  const code = url.searchParams.get("code");
  if (code === null || url.searchParams.get("state") !== cookies.get("state")) {
    throw redirect(302, "/");
  }
  try {
    const providerUserAuth = await googleAuth.validateCallback(code);
    if (!providerUserAuth.googleUser.email_verified || providerUserAuth.googleUser.email === void 0) {
      throw redirect(302, "/");
    }
    const id = await _upsert(providerUserAuth, providerUserAuth.googleUser.email);
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
