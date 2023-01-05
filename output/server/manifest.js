const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Resume.pdf","favicon.png"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-68ff8f27.js","imports":["_app/immutable/start-68ff8f27.js","_app/immutable/chunks/index-931d7e5a.js","_app/immutable/chunks/singletons-01b08d4d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-754aa6c9.js'),
			() => import('./chunks/1-e528018e.js'),
			() => import('./chunks/2-b3b1d009.js'),
			() => import('./chunks/3-19fe0898.js'),
			() => import('./chunks/4-f9157854.js'),
			() => import('./chunks/5-0ea802a1.js'),
			() => import('./chunks/6-4fe4774f.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/leetcode",
				pattern: /^\/leetcode\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
