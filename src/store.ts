import { writable } from 'svelte/store';

let is_player1 = writable(true);
let can_make_a_move = writable(true);
export {is_player1,can_make_a_move};