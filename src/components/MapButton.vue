<template lang="pug">
  .map-button
    XButton(icon="map-marker" iconColor="#C3C1D6" label="Location" mode="smooth" to="/map")
</template>

<script>
import XButton from "./XButton";

export default {
  name: "CoverImage",

  components: {
    XButton
  }
};
</script>

<style lang="sass" scoped>
.map-button
  margin: 20px
</style>
