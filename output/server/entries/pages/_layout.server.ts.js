const prerender = true;
const load = async ({ locals }) => {
  return {
    user: (await locals.auth.validate())?.user
  };
};
export {
  load,
  prerender
};
