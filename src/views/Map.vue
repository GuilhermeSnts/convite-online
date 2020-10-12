<template lang="pug">
  .map-page
    h1 map
    gmap-map(
        :center="{lat: -22.974612, lng: -43.187128}"
        :zoom="15"
        map-type-id="terrain"
        class="map-block"
        )
        gmap-marker(
            :position="{lat: -22.974612, lng: -43.187128}"
        )
</template>

<script>
export default {
  name: "Map",

  mounted() {
    console.log(process.env.VUE_APP_GOOGLE_API_KEY);
  }
};
</script>

<style lang="sass" scoped>
.map-page
    .map-block
        width: 100%
        height: calc(100vh - 80px)
</style>
