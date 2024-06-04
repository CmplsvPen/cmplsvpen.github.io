import * as server from '../entries/pages/admin/questions/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/questions/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/questions/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.9a732162.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/forms.1cb0d4cd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/navigation.3e81519c.js","_app/immutable/chunks/actions.c3a21eae.js","_app/immutable/chunks/toggle.c49ab143.js"];
export const stylesheets = ["_app/immutable/assets/10.cf566c76.css","_app/immutable/assets/toggle.3ea060b3.css"];
export const fonts = [];
