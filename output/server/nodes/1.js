

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.49ef2af2.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/stores.f8f0b7d0.js","_app/immutable/chunks/singletons.dc353f91.js"];
export const stylesheets = [];
export const fonts = [];
