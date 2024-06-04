export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["announcement-corner.png","burger_Menu.png","Checkered Background.svg","favicon.png","Freetail_bat.png","Grid.png","hackerid/hackerid.svg","Landing.svg","manifest.json","Sponsors/Capital One.png","Sponsors/CodeCrafters.png","Sponsors/Red Bull.png","Sponsors/Roblox.png","Sponsors/Stand Out Stickers.png","Topographic Background.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.3a4dbf0a.js","app":"_app/immutable/entry/app.30932463.js","imports":["_app/immutable/entry/start.3a4dbf0a.js","_app/immutable/chunks/index.0a40a80f.js","_app/immutable/chunks/singletons.dc353f91.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.30932463.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.0a40a80f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/email",
				pattern: /^\/admin\/email\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/homepage",
				pattern: /^\/admin\/homepage\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin/homepage/challenges/[specificChallenge]",
				pattern: /^\/admin\/homepage\/challenges\/([^/]+?)\/?$/,
				params: [{"name":"specificChallenge","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/admin/homepage/faq/[faqQuestion]",
				pattern: /^\/admin\/homepage\/faq\/([^/]+?)\/?$/,
				params: [{"name":"faqQuestion","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/admin/homepage/schedule/[event]",
				pattern: /^\/admin\/homepage\/schedule\/([^/]+?)\/?$/,
				params: [{"name":"event","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/admin/questions",
				pattern: /^\/admin\/questions\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/admissions",
				pattern: /^\/admissions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/apply",
				pattern: /^\/apply\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/files/[user]/[question]",
				pattern: /^\/files\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false},{"name":"question","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/files/_user_/_question_/_server.ts.js'))
			},
			{
				id: "/id",
				pattern: /^\/id\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/login/oauth",
				pattern: /^\/login\/oauth\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/login/oauth/_server.ts.js'))
			},
			{
				id: "/login/oauth/github",
				pattern: /^\/login\/oauth\/github\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/login/oauth/github/_server.ts.js'))
			},
			{
				id: "/login/oauth/google",
				pattern: /^\/login\/oauth\/google\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/login/oauth/google/_server.ts.js'))
			},
			{
				id: "/login/reset-password",
				pattern: /^\/login\/reset-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/login/verify-email/[token]",
				pattern: /^\/login\/verify-email\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/scan",
				pattern: /^\/scan\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/scan/[action]",
				pattern: /^\/scan\/([^/]+?)\/?$/,
				params: [{"name":"action","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/unverified",
				pattern: /^\/unverified\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/users",
				pattern: /^\/users\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/users/download-data",
				pattern: /^\/users\/download-data\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/users/download-data/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
