import { b as googleAuth, g as githubAuth } from "../../chunks/lucia.js";
import { t as trpc } from "../../chunks/router.js";
const load = async ({ locals }) => {
  return {
    user: (await locals.auth.validate())?.user,
    announcements: await trpc(locals.auth).announcements.getAll(),
    schedule: await trpc(locals.auth).events.getAll(),
    settings: await trpc(locals.auth).settings.getPublic(),
    faqs: await trpc(locals.auth).infoBox.getAllOfCategory("FAQ"),
    challenges: await trpc(locals.auth).infoBox.getAllOfCategory("CHALLENGE"),
    // Check whether various OAuth providers are set up in
    // environment variables so we can show/hide buttons.
    providers: {
      google: googleAuth !== null,
      github: githubAuth !== null
    },
    canApply: await trpc(locals.auth).admissions.canApply()
  };
};
const actions = {
  announce: async ({ locals, request }) => {
    const formData = await request.formData();
    const body = formData.get("announcement");
    await trpc(locals.auth).announcements.create(body);
  },
  unannounce: async ({ locals, request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    await trpc(locals.auth).announcements.delete(Number(id));
  }
};
export {
  actions,
  load
};
