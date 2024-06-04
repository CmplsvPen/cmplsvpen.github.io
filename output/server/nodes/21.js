import * as server from '../entries/pages/unverified/_page.server.ts.js';

export const index = 21;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/unverified/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/unverified/+page.server.ts";
export const imports = ["_app/immutable/nodes/21.0a1a0998.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/forms.1cb0d4cd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/navigation.3e81519c.js"];
export const stylesheets = ["_app/immutable/assets/16.5f648fb4.css"];
export const fonts = [];
