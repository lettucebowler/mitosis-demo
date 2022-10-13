<template>
  <button @click="count = count + 1">{{ count }}</button>
</template>

<script>
export default {
  name: "counter",

  data: () => ({ count: 0 }),
};
</script>
