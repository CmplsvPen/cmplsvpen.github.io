import { t as trpc } from "../../../../chunks/router.js";
import { r as redirect } from "../../../../chunks/index.js";
const actions = {
  email: async ({ locals, request, url }) => {
    const email = (await request.formData()).get("email");
    await trpc(locals.auth).users.sendPasswordResetEmail({ email });
    throw redirect(302, url.pathname + "?submitted");
  },
  reset: async ({ request, url, locals }) => {
    const formData = await request.formData();
    try {
      const session = await trpc(locals.auth).users.resetPassword({
        token: formData.get("token"),
        password: formData.get("password")
      });
      locals.auth.setSession(session);
    } catch (e) {
      throw redirect(302, url.pathname + "?invalid");
    }
    throw redirect(302, "/");
  }
};
export {
  actions
};
