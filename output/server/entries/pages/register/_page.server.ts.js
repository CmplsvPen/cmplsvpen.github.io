import { b as googleAuth, g as githubAuth } from "../../../chunks/lucia.js";
import { t as trpc } from "../../../chunks/router.js";
import { r as redirect } from "../../../chunks/index.js";
const load = async ({ locals }) => {
  if (await locals.auth.validate()) {
    throw redirect(303, "/");
  }
  return {
    providers: {
      google: googleAuth !== null,
      github: githubAuth !== null
    }
  };
};
const actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const session = await trpc(locals.auth).users.register({ email, password });
    if (session !== null) {
      locals.auth.setSession(session);
      await trpc(locals.auth).users.sendVerificationEmail();
    } else {
      return "That email is already in use, either through a previous registration or linked social (Google/GitHub/...) account.";
    }
  }
};
export {
  actions,
  load
};
