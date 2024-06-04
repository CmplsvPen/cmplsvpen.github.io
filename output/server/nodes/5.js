import * as server from '../entries/pages/admin/email/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/email/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/email/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.1b946f33.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/forms.1cb0d4cd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/navigation.3e81519c.js","_app/immutable/chunks/index-browser.d9ceecad.js","_app/immutable/chunks/markdown-editor.ec0ef13c.js","_app/immutable/chunks/SvelteMarkdown.2e90b6f0.js"];
export const stylesheets = ["_app/immutable/assets/5.fafcf61f.css","_app/immutable/assets/markdown-editor.15e5da5f.css"];
export const fonts = [];
