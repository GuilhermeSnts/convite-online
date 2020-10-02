<template lang="pug">
  .image(:style="{ backgroundImage: 'url('+src+')'}")
</template>

<script>
export default {
  name: "CoverImage",

  props: {
    src: String
  }
};
</script>

<style scoped>
.image {
  width: 100vw;
  height: 50vh;
  background-position: center;
  background-size: cover;
}
</style>
