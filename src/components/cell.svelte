<script>
    import { Button, MaterialApp } from 'svelte-materialify';
    let cell_value = "";
    let player1 = true;
    const click_cell = () =>{
        const char = player1 ? 'X' : 'O';
        console.log({cell_value});
        cell_value = char;
    }
</script>
<cell>
  <div class="d-flex flex-column flex-sm-row justify-space-between">
    <Button class="cell" bind:value={cell_value} on:click= {click_cell}>{cell_value}</Button>
  </div>
</cell>
<style>

</style>