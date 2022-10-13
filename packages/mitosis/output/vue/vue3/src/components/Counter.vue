<template>
  <div>
    <button
      @click="
        count += 1;
        console.log(state);
      "
    >
      {{ count }}
    </button>
  </div>
</template>

<script>
export default {
  name: "counter",

  data: () => ({ count: 0 }),
};
</script>
