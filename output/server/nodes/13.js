import * as server from '../entries/pages/id/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/id/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/id/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.3fda28c4.js","_app/immutable/chunks/index.0a40a80f.js"];
export const stylesheets = ["_app/immutable/assets/13.898fd8a1.css"];
export const fonts = [];
