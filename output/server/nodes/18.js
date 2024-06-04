import * as server from '../entries/pages/register/_page.server.ts.js';

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/18.2c234bc8.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/forms.1cb0d4cd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/navigation.3e81519c.js","_app/immutable/chunks/social-login.a47b3b73.js"];
export const stylesheets = ["_app/immutable/assets/18.84efa547.css","_app/immutable/assets/social-login.aaf22882.css"];
export const fonts = [];
