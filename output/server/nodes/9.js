import * as server from '../entries/pages/admin/homepage/schedule/_event_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/homepage/schedule/_event_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/homepage/schedule/[event]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.d1ab9c66.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/forms.1cb0d4cd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/navigation.3e81519c.js","_app/immutable/chunks/actions.c3a21eae.js"];
export const stylesheets = ["_app/immutable/assets/9.368c14cf.css"];
export const fonts = [];
