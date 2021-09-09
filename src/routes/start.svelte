<script>
    import Button from "svelte-materialify/src/components/Button/Button.svelte";

    import { fade, fly } from "svelte/transition";

    import { goto } from "$app/navigation";

    let player1 = true;
    import { can_make_a_move, is_player1 } from "../store";
import { Container } from "svelte-materialify";
    is_player1.subscribe((value) => {
        player1 = value;
    });
    const start_the_game = () => {
        console.log({ player1 });
        goto("/game");
    };
    const set_to_second_player = () => {
        is_player1.update((value) => false);
        can_make_a_move.update((value) => {
            value = false;
        });
        //start_the_game();
    };
    const join_game = () => {
        goto("/join_game");
        set_to_second_player();
    };
</script>


    <div in:fly = {{x:100,duration:1000}} >

        <Button  block  class="primary-color mt-3" size="x-large" on:click={start_the_game} >Create Game</Button>
    </div>
    <div in:fly = {{x:-100,duration:1000}}>
        
        
        <Button block class="primary-color mt-3"  size="x-large" on:click={join_game} >Join Game</Button>
    </div>
 
