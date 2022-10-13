<script>
  let count = 0;
</script>

<div>
  <button
    on:click={(event) => {
      count += 1;
      console.log(state);
    }}>{count}</button
  >
</div>
