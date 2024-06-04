import * as server from '../entries/pages/apply/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/apply/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/apply/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.80001f01.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/forms.1cb0d4cd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/navigation.3e81519c.js","_app/immutable/chunks/SvelteMarkdown.2e90b6f0.js","_app/immutable/chunks/actions.c3a21eae.js","_app/immutable/chunks/dropdown.0e987bb0.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"];
export const stylesheets = ["_app/immutable/assets/12.3988368a.css","_app/immutable/assets/dropdown.032cf5c2.css"];
export const fonts = [];
