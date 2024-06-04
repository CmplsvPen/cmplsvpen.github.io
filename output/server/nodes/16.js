import * as server from '../entries/pages/login/verify-email/_token_/_page.server.ts.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/verify-email/_token_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/verify-email/[token]/+page.server.ts";
export const imports = ["_app/immutable/nodes/16.91e5badb.js","_app/immutable/chunks/index.0a40a80f.js"];
export const stylesheets = ["_app/immutable/assets/16.5f648fb4.css"];
export const fonts = [];
