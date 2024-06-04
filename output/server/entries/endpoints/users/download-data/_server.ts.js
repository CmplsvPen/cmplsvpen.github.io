import { a as authenticate } from "../../../../chunks/authenticate.js";
import { t as trpc } from "../../../../chunks/router.js";
import { Parser } from "@json2csv/plainjs";
const GET = async ({ locals, url }) => {
  await authenticate(locals.auth, ["ADMIN"]);
  const results = await trpc(locals.auth).users.search({
    page: 1,
    key: url.searchParams.get("key") ?? "",
    search: url.searchParams.get("search") ?? "",
    limit: 0,
    searchFilter: url.searchParams.get("searchFilter") ?? ""
  });
  const questions = await trpc(locals.auth).questions.get();
  const parser = new Parser();
  const users = [];
  for (const user of results.users) {
    users.push(prepare(user, questions));
  }
  return new Response(parser.parse(users), {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": 'attachment; filename="users.csv"'
    }
  });
};
function prepare(user, questions) {
  function prepareApplication(application) {
    const prepared = {};
    for (const question of questions) {
      prepared[question.label] = application[question.id];
    }
    return prepared;
  }
  return {
    ...user.authUser,
    ...prepareApplication(user.application),
    decision: user.decision?.status,
    ...user.scanCount
  };
}
export {
  GET
};
