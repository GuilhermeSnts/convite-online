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

<style lang="sass" scoped>
.image
  width: 100%
  height: 50vh
  background-position: center
  background-size: cover
</style>
