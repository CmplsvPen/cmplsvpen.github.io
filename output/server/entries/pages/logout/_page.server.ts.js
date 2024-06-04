import { t as trpc } from "../../../chunks/router.js";
import { r as redirect } from "../../../chunks/index.js";
const actions = {
  default: async ({ locals }) => {
    await trpc(locals.auth).users.logout();
    locals.auth.setSession(null);
    throw redirect(303, "/");
  }
};
export {
  actions
};
