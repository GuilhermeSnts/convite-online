<template lang="pug">
  .map-button
    XButton(icon="calender" iconColor="#C3C1D6" label="Date" mode="smooth" to="/date")
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
