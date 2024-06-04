import { t as trpc } from "../../../chunks/router.js";
import { r as redirect } from "../../../chunks/index.js";
const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session === null || session.user.status !== "CREATED") {
    throw redirect(303, "/");
  }
};
const actions = {
  default: async ({ locals }) => {
    await trpc(locals.auth).users.sendVerificationEmail();
    return "Verification email resent!";
  }
};
export {
  actions,
  load
};
