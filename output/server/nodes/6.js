import * as server from '../entries/pages/admin/homepage/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/homepage/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/homepage/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.e018fa44.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/forms.1cb0d4cd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/navigation.3e81519c.js","_app/immutable/chunks/actions.c3a21eae.js","_app/immutable/chunks/markdown-editor.ec0ef13c.js","_app/immutable/chunks/SvelteMarkdown.2e90b6f0.js"];
export const stylesheets = ["_app/immutable/assets/6.519afee4.css","_app/immutable/assets/markdown-editor.15e5da5f.css"];
export const fonts = [];
