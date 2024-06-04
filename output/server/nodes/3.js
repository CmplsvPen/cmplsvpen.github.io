import * as server from '../entries/pages/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.af9dac4b.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/forms.1cb0d4cd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/navigation.3e81519c.js","_app/immutable/chunks/SvelteMarkdown.2e90b6f0.js","_app/immutable/chunks/markdown-editor.ec0ef13c.js","_app/immutable/chunks/global.0d39fa2c.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"];
export const stylesheets = ["_app/immutable/assets/3.af8c6574.css","_app/immutable/assets/markdown-editor.15e5da5f.css","_app/immutable/assets/global.942fd396.css"];
export const fonts = [];
