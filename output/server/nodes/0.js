import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.fafa3ec8.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/stores.f8f0b7d0.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/global.0d39fa2c.js","_app/immutable/chunks/stores.d1e05fe6.js","_app/immutable/chunks/navigation.3e81519c.js"];
export const stylesheets = ["_app/immutable/assets/0.5999e7d3.css","_app/immutable/assets/global.942fd396.css"];
export const fonts = [];
