<template lang="pug">
  .home
    CoverImage( src="https://images.unsplash.com/photo-1553102674-af685bb5fe40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60")
    TitleBlock Juracy & Apolônio
    TextBlock Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    TextBlock
      h2 15/16/20

    TextBlock Delamere Manor, Cuddington, CWB 2TE

    .row
      MapButton
      CalendarButton
    
</template>

<script>
import CoverImage from "@/components/CoverImage.vue";
import TextBlock from "@/components/TextBlock.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import MapButton from "@/components/MapButton.vue";
import CalendarButton from "@/components/CalendarButton.vue";

export default {
  name: "Home",
  components: {
    CoverImage,
    TextBlock,
    TitleBlock,
    MapButton,
    CalendarButton
  }
};
</script>

<style lang="sass" scoped>
.home
  .row
    display: flex
    flex-direction: row
    justify-content: center
</style>
