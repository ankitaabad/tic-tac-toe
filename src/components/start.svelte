<script>
import Button from "svelte-materialify/src/components/Button/Button.svelte";
import {count} from '../index';
const toggle_player = () =>{
    count = false;
}
</script>

<start>

    <Button>Create Game</Button>
    
    <Button on:click ={toggle_player}>Join Game</Button>
</start>