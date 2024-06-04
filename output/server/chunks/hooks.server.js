import { a as auth } from "./lucia.js";
import { d as building } from "./internal.js";
import { p as prisma } from "./db.js";
import { r as router } from "./router.js";
import { c as createContext } from "./questions.js";
import { createTRPCHandle } from "trpc-sveltekit";
function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const luciaAuthHandle = async ({ event, resolve }) => {
  event.locals.auth = auth.handleRequest(event);
  return await resolve(event);
};
const trpcHandle = createTRPCHandle({
  router,
  createContext: async (event) => createContext(event.locals.auth)
});
const handle = sequence(luciaAuthHandle, trpcHandle);
if (!building) {
  await prisma.settings.upsert({
    where: { id: 0 },
    update: {},
    create: {}
  });
}
export {
  handle
};
