<script>
  import { can_make_a_move, is_player1 } from "../store";

  import { Button } from "svelte-materialify";
  let cell_value = "";
  let player1 = true;
  let char = "X";
  let can_click = false;
  can_make_a_move.subscribe((value) => {
    can_click = value;
  });

  is_player1.subscribe((value) => {
    if (!value) {
      char = "O";
    }
  });
  const click_cell = () => {
    console.log({ cell_value });
    if (can_click) {
      cell_value = char;
      can_make_a_move.update((_) => {
        return false;
      });
    }
  };
</script>

<div>
  <Button
    class="border rounded-0 pink"
    block
    bind:value={cell_value}
    on:click={click_cell}>{cell_value}</Button
  >
</div>

<style>
  div {
    width: 100px;
    /* margin:auto; */
    border: 3px solid #FFC8C1;
  }
</style>
