<template lang="pug">
  .text-block
    slot 
</template>

<script>
export default {
  name: "CoverImage"
};
</script>

<style scoped>
.text-block {
  font-size: 0.9em;
  margin: 15px 10px;
  font-weight: 300;
  color: dimgrey;
}
</style>
