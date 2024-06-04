import { a as authenticate } from "../../../../../../chunks/authenticate.js";
import { t as trpc } from "../../../../../../chunks/router.js";
import { e as error, r as redirect } from "../../../../../../chunks/index.js";
const load = async ({ locals, params }) => {
  await authenticate(locals.auth, ["ADMIN"]);
  if (Number.isNaN(Number(params.specificChallenge))) {
    throw error(404, "Challenge not found");
  }
  const challenge = await trpc(locals.auth).infoBox.get(Number(params.specificChallenge));
  if (challenge !== null) {
    return {
      challenge
    };
  }
  throw error(404, "Challenge not found");
};
const actions = {
  edit: async ({ locals, request }) => {
    const formData = await request.formData();
    await trpc(locals.auth).infoBox.update({
      id: Number(formData.get("id")),
      title: formData.get("title"),
      response: formData.get("response"),
      category: "CHALLENGE"
    });
    return "Saved challenge!";
  },
  delete: async ({ locals, request }) => {
    const formData = await request.formData();
    await trpc(locals.auth).infoBox.delete(Number(formData.get("id")));
    throw redirect(303, "/");
  }
};
export {
  actions,
  load
};
