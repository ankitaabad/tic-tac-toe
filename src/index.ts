import { writable } from 'svelte/store';

const count = writable(true);
export {count};