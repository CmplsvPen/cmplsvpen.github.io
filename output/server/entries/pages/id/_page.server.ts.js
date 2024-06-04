import { a as authenticate } from "../../../chunks/authenticate.js";
const load = async ({ locals }) => {
  return { user: await authenticate(locals.auth) };
};
export {
  load
};
