

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.12ef5087.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/stores.f8f0b7d0.js","_app/immutable/chunks/singletons.dc353f91.js"];
export const stylesheets = ["_app/immutable/assets/2.57b2d472.css"];
export const fonts = [];
