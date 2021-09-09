<script>

import Cell from "./cell.svelte";
import { ProgressCircular } from "svelte-materialify";
import { fade, fly } from "svelte/transition";

let loading_complete = true;
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
padding: 10px;
width:300px;
margin:auto;
}


</style>
{#if loading_complete}
  
<div class="grid-container" in:fly = {{y:100,duration:1000}}>
  <Cell>1</Cell>
  <Cell>2</Cell>
  <Cell>3</Cell>  
  <Cell>4</Cell>
  <Cell>5</Cell>
  <Cell>6</Cell>  
  <Cell>7</Cell>
  <Cell>8</Cell>
  <Cell>9</Cell>  
</div>
{:else}
<ProgressCircular size={50} indeterminate color="primary" />
{/if}