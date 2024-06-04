import { a as authenticate } from "../../../chunks/authenticate.js";
import { t as trpc } from "../../../chunks/router.js";
import { r as redirect } from "../../../chunks/index.js";
const load = async ({ locals }) => {
  await authenticate(locals.auth, ["HACKER"]);
  const settings = await trpc(locals.auth).settings.getPublic();
  const deadline = await trpc(locals.auth).users.getRSVPDeadline();
  return {
    user: await trpc(locals.auth).users.get(),
    rsvpDeadline: deadline,
    questions: await trpc(locals.auth).questions.get(),
    settings,
    canApply: await trpc(locals.auth).admissions.canApply()
  };
};
function formToApplication(questions, formData) {
  const application = {};
  for (const question of questions) {
    if (question.type === "SENTENCE" || question.type === "PARAGRAPH" || question.type === "RADIO" || question.type === "FILE") {
      application[question.id] = formData.get(question.id);
    } else if (question.type === "NUMBER") {
      application[question.id] = Number(formData.get(question.id));
      if (isNaN(application[question.id])) {
        application[question.id] = void 0;
      }
    } else if (question.type === "CHECKBOX") {
      application[question.id] = formData.get(question.id) === "on";
    } else if (question.type === "DROPDOWN") {
      const selected = formData.get(question.id);
      try {
        application[question.id] = JSON.parse(selected);
      } catch (ignore) {
      }
    }
  }
  return application;
}
const actions = {
  save: async ({ locals, request }) => {
    await trpc(locals.auth).users.update(
      formToApplication(await trpc(locals.auth).questions.get(), await request.formData())
    );
  },
  finish: async ({ locals, request }) => {
    if (!await trpc(locals.auth).admissions.canApply()) {
      throw redirect(301, "/apply");
    }
    await trpc(locals.auth).users.update(
      formToApplication(await trpc(locals.auth).questions.get(), await request.formData())
    );
    return await trpc(locals.auth).users.submitApplication();
  },
  withdraw: async ({ locals }) => {
    if (!await trpc(locals.auth).admissions.canApply()) {
      throw redirect(301, "/apply");
    }
    await trpc(locals.auth).users.withdrawApplication();
  },
  confirm: async ({ locals }) => {
    await trpc(locals.auth).users.rsvp("CONFIRMED");
  },
  decline: async ({ locals }) => {
    await trpc(locals.auth).users.rsvp("DECLINED");
  }
};
export {
  actions,
  load
};
