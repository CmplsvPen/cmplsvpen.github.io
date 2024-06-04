import * as server from '../entries/pages/admin/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.29a88697.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/forms.1cb0d4cd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/navigation.3e81519c.js","_app/immutable/chunks/actions.c3a21eae.js","_app/immutable/chunks/toggle.c49ab143.js","_app/immutable/chunks/index-browser.d9ceecad.js","_app/immutable/chunks/Plot.bcfc853d.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/4.c897955c.css","_app/immutable/assets/toggle.3ea060b3.css","_app/immutable/assets/Plot.85fe7ba9.css"];
export const fonts = [];
