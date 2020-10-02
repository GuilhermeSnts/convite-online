<template lang="pug">
  button.button
    slot
</template>

<script>
export default {
  name: "XButton"
};
</script>

<style scoped>
.button {
  padding: 8px 25px;
  background: #60243d;
  color: white;
  border-radius: 6px;
  border: none;
}
</style>
