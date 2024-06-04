import { b as googleAuth, g as githubAuth } from "../../../chunks/lucia.js";
import { t as trpc } from "../../../chunks/router.js";
import { r as redirect } from "../../../chunks/index.js";
const load = async ({ locals }) => {
  if (await locals.auth.validate()) {
    throw redirect(303, "/");
  }
  return {
    user: (await locals.auth.validate())?.user,
    providers: {
      google: googleAuth !== null,
      github: githubAuth !== null
    }
  };
};
const actions = {
  login: async ({ locals, request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      locals.auth.setSession(await trpc(locals.auth).users.login({ email, password }));
    } catch (error) {
      console.log("Invalid email or password.");
    }
  }
};
export {
  actions,
  load
};
