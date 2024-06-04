import { b as googleAuth, g as githubAuth } from "../../../../chunks/lucia.js";
import { p as prisma } from "../../../../chunks/db.js";
const GET = async ({ cookies, url }) => {
  const provider = getProvider(url.searchParams.get("provider"));
  if (provider === null) {
    return new Response(null, { status: 404 });
  }
  const [redirect, state] = await provider.getAuthorizationUrl();
  cookies.set("state", state, { path: "/", maxAge: 60 });
  return new Response(null, {
    status: 302,
    headers: { location: redirect.toString() }
  });
};
function getProvider(provider) {
  if (provider === "google") {
    return googleAuth;
  } else if (provider === "github") {
    return githubAuth;
  } else {
    return null;
  }
}
async function _upsert(providerUserAuth, email) {
  email = email.trim().toLowerCase();
  const user = await prisma.authUser.findUnique({
    where: { email }
  });
  if (user === null) {
    const newUser = await providerUserAuth.createUser({
      attributes: {
        email,
        roles: ["HACKER"],
        status: "CREATED",
        verifiedEmail: true
      }
    });
    return newUser.id;
  } else if (providerUserAuth.getExistingUser() === null) {
    await providerUserAuth.createKey(user.id);
  }
  return user.id;
}
export {
  GET,
  _upsert
};
