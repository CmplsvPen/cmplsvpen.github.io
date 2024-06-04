import { r as redirect } from "./index.js";
async function authenticate(auth, roles) {
  const session = await auth.validate();
  if (session === null) {
    throw redirect(303, "/?unauthenticated");
  }
  const user = session.user;
  if (roles !== void 0 && !hasAnyRole(user.roles, roles)) {
    throw redirect(303, "/?forbidden");
  }
  if (!user.verifiedEmail) {
    throw redirect(303, "/unverified");
  }
  return user;
}
function hasAnyRole(userRoles, allowedRoles) {
  return userRoles.some((userRole) => allowedRoles.includes(userRole));
}
export {
  authenticate as a
};
