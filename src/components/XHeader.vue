<template lang="pug">
  .header
      .header-return.header-item
        x-button(icon="map-marker" iconColor="#ffffff" label="voltar" mode="outline" to="/")
      .header-title.header-item
        h1 {{ title }}
</template>

<script>
import XButton from "../components/XButton";

export default {
  name: "XHeader",

  components: {
    XButton
  },

  props: {
    title: String
  }
};
</script>

<style lang="sass" scoped>
.header
    height: 80px
    display: flex
    flex-direction: row
    justify-content: space-between
    align-content: center
    vertical-align: middle
    .header-item
        display: flex
        height: 100%
    .header-return
        margin-left: 10px
        align-items: center
        align-content: center
    .header-title
        margin-right: 10px
</style>
