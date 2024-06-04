import * as server from '../entries/pages/login/reset-password/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/reset-password/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/reset-password/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.06deb307.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/forms.1cb0d4cd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/navigation.3e81519c.js","_app/immutable/chunks/stores.f8f0b7d0.js"];
export const stylesheets = ["_app/immutable/assets/15.f1eec23a.css"];
export const fonts = [];
