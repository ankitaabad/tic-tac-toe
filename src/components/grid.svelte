<script>

import Cell from "./cell.svelte";

</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}

</style>

<div class="grid-container">
  <Cell class="grid-item" ></Cell>
  <Cell class="grid-item">2</Cell>
  <Cell class="grid-item">3</Cell>  
  <Cell class="grid-item">4</Cell>
  <Cell class="grid-item">5</Cell>
  <Cell class="grid-item">6</Cell>  
  <Cell class="grid-item">7</Cell>
  <Cell class="grid-item">8</Cell>
  <Cell class="grid-item">9</Cell>  
</div>


