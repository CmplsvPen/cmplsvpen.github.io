import { a as authenticate } from "../../../../chunks/authenticate.js";
import { t as trpc } from "../../../../chunks/router.js";
const load = async ({ locals, params, url }) => {
  await authenticate(locals.auth, ["ORGANIZER", "ADMIN"]);
  const questions = await trpc(locals.auth).questions.get();
  const scanRelevantQuestions = questions.filter((question) => !question.hideScan);
  return {
    questions: scanRelevantQuestions,
    settings: await trpc(locals.auth).settings.getPublic(),
    scans: url.searchParams.has("stats") ? await trpc(locals.auth).users.getScanLog(params.action) : null
  };
};
const actions = {
  scan: async ({ locals, request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    const action = formData.get("action");
    await trpc(locals.auth).users.scan({ id, action });
  }
};
export {
  actions,
  load
};
