import { t as trpc } from "../../../../../chunks/router.js";
const load = async ({ locals, params }) => {
  try {
    await trpc(locals.auth).users.verifyEmail(params.token);
    return { success: true };
  } catch (e) {
    return { success: false };
  }
};
export {
  load
};
