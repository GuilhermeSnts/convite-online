<template lang="pug">
  .title-block
    slot 
</template>

<script>
export default {
  name: "CoverImage"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sansita+Swashed&display=swap");
.title-block {
  font-size: 2em;
  margin: 15px 10px;
  font-weight: 300;
  color: dimgrey;
  font-family: "Sansita Swashed", cursive;
}
</style>
