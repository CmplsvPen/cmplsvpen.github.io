import * as server from '../entries/pages/scan/_page.server.ts.js';

export const index = 19;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/scan/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/scan/+page.server.ts";
export const imports = ["_app/immutable/nodes/19.617d411a.js","_app/immutable/chunks/index.0a40a80f.js"];
export const stylesheets = ["_app/immutable/assets/19.102f7bf7.css"];
export const fonts = [];
