import VLogin from '@views/VLogin.vue';

export default [
	{
		path: '/',
		name: 'login',
		component: VLogin,
	},
	{
		path: '/global',
		name: 'global',
		component: () => import('@views/VGlobal.vue'),
	},
];
