import { a as authenticate } from "../../../chunks/authenticate.js";
import { t as trpc } from "../../../chunks/router.js";
const load = async ({ locals }) => {
  await authenticate(locals.auth, ["ORGANIZER", "ADMIN"]);
  return {
    scanActions: (await trpc(locals.auth).settings.getPublic()).scanActions
  };
};
export {
  load
};
