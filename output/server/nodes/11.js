import * as server from '../entries/pages/admissions/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admissions/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admissions/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.838554c9.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/forms.1cb0d4cd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/navigation.3e81519c.js","_app/immutable/chunks/user-card.0f571b66.js","_app/immutable/chunks/stores.f8f0b7d0.js","_app/immutable/chunks/SvelteMarkdown.2e90b6f0.js"];
export const stylesheets = ["_app/immutable/assets/11.47a80292.css","_app/immutable/assets/user-card.50b73f86.css"];
export const fonts = [];
