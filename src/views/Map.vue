<template lang="pug">
  .map-page
    XHeader(title="Map")
    l-map(
      :zoom="zoom"
      :center="marker"
      class="map-block"
      :options="options"
      :currentCenter="marker"
      )
      l-tile-layer(:url="url")
      l-marker( :lat-lng="marker" :icon="iconMarkerPin")
    
</template>

<script>
import { latLng, icon } from "leaflet";
import { LMap, LTileLayer, LIcon, LMarker } from "vue2-leaflet";
import markerIcon from "../assets/pin-location.gif";
import XHeader from "../components/XHeader";
import { mapGetters } from "vuex";
export default {
  name: "Map",

  data: () => ({
    options: {
      zoomSnap: 0.5
    },

    zoom: 13,
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }),

  computed: {
    marker() {
      return latLng(this.latitude, this.longitude);
    },
    iconMarkerPin() {
      return icon({
        iconUrl: markerIcon,
        iconSize: [62, 67],
        iconAnchor: [16, 37]
      });
    },
    ...mapGetters("map", {
      latitude: "getLatitude",
      longitude: "getLongitude"
    })
  },

  components: {
    LMap,
    LMarker,
    LTileLayer,
    LIcon,
    XHeader
  }
};
</script>

<style lang="sass" scoped>
.map-page
  .map-block
    width: 100%
    height: calc(100vh - 80px)
</style>
