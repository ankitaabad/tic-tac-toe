<script>
import { goto } from "$app/navigation";


import { MaterialApp, TextField } from "svelte-materialify";
import Button from "svelte-materialify/src/components/Button/Button.svelte";
import { fly } from "svelte/transition";
let game_id = null;
const join_game = () =>{
    
    goto("/game");
}
</script>
<MaterialApp>

    <form block class="mt-5 game_input" >
        <div  in:fly = {{x:100,duration:1000}}>
            
            <TextField  clearable outlined block >Enter Game Id</TextField>
        </div>
        <div in:fly = {{x:-100,duration:1000}}>
            
            <Button bind:value = {game_id} block class ="primary-color" on:click = {join_game}>Join Game</Button>
        </div>
    </form>
</MaterialApp>
    <style>
        .game_input {
            width:100%
        }
</style>