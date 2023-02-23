import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {
	state: () => ({ loggedIn: false }),
	actions: {},
});
