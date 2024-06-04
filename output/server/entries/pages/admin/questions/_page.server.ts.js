import { a as authenticate } from "../../../../chunks/authenticate.js";
import { t as trpc } from "../../../../chunks/router.js";
const load = async ({ locals }) => {
  await authenticate(locals.auth, ["ADMIN"]);
  return { questions: await trpc(locals.auth).questions.get() };
};
const actions = {
  create: async ({ locals, request }) => {
    const formData = await request.formData();
    await trpc(locals.auth).questions.create(formData.get("type"));
  },
  moveDown: async ({ locals, request }) => {
    const formData = await request.formData();
    await trpc(locals.auth).questions.moveDown(formData.get("id"));
  },
  moveUp: async ({ locals, request }) => {
    const formData = await request.formData();
    await trpc(locals.auth).questions.moveUp(formData.get("id"));
  },
  update: async ({ locals, request }) => {
    const formData = Object.fromEntries(await request.formData());
    const questions = {};
    for (const key in formData) {
      const [id, field] = key.split("_");
      if (!(id in questions)) {
        questions[id] = {};
      }
      questions[id][field] = formData[key];
    }
    for (const id in questions) {
      questions[id].required = questions[id].required === "on";
      questions[id].sponsorView = questions[id].sponsorView === "on";
      questions[id].hideAdmission = questions[id].hideAdmission === "on";
      questions[id].hideScan = questions[id].hideScan === "on";
      if (questions[id].type === "NUMBER") {
        const min = Number(questions[id].min);
        const max = Number(questions[id].max);
        questions[id].min = questions[id].min === "" || Number.isNaN(min) ? null : min;
        questions[id].max = questions[id].max === "" || Number.isNaN(max) ? null : max;
        if (questions[id].min !== null && questions[id].max !== null && questions[id].min > questions[id].max) {
          [questions[id].min, questions[id].max] = [questions[id].max, questions[id].min];
        }
        questions[id].step = Number(questions[id].step) || 1;
      } else if (questions[id].type === "DROPDOWN" || questions[id].type === "RADIO") {
        questions[id].options = [
          ...new Set(
            questions[id].options.split("\r\n").map((option) => option.trim()).filter(Boolean)
          )
        ];
        questions[id].multiple = questions[id].multiple === "on";
        questions[id].custom = questions[id].custom === "on";
      } else if (questions[id].type === "FILE") {
        questions[id].maxSizeMB = Number(questions[id].maxSizeMB) || 1;
      }
    }
    await trpc(locals.auth).questions.update(questions);
    return "Saved questions!";
  },
  delete: async ({ locals, request }) => {
    const formData = await request.formData();
    await trpc(locals.auth).questions.delete(formData.get("id"));
  }
};
export {
  actions,
  load
};
