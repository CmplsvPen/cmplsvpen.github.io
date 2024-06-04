export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22')
];

export const server_loads = [0];

export const dictionary = {
		"/": [~3],
		"/admin": [~4,[2]],
		"/admin/email": [~5,[2]],
		"/admin/homepage": [~6,[2]],
		"/admin/homepage/challenges/[specificChallenge]": [~7,[2]],
		"/admin/homepage/faq/[faqQuestion]": [~8,[2]],
		"/admin/homepage/schedule/[event]": [~9,[2]],
		"/admin/questions": [~10,[2]],
		"/admissions": [~11],
		"/apply": [~12],
		"/id": [~13],
		"/login": [~14],
		"/login/reset-password": [15],
		"/login/verify-email/[token]": [~16],
		"/logout": [17],
		"/register": [~18],
		"/scan": [~19],
		"/scan/[action]": [~20],
		"/unverified": [~21],
		"/users": [~22]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';