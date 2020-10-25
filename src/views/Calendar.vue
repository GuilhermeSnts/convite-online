<template lang="pug">
  .calendar-page
    XHeader(title="Calendar")
    XCalendar( :date="date" :hour="hour")
    
</template>

<script>
import XHeader from "../components/XHeader";
import XCalendar from "../components/XCalendar";
import { mapGetters } from "vuex";

export default {
  name: "Map",

  computed: {
    ...mapGetters("calendar", {
      date: "getDate",
      hour: "getHour"
    })
  },

  components: {
    XHeader,
    XCalendar
  }
};
</script>

<style lang="sass" scoped>
.calendar-page
  .calendar--add-button
    margin-top: 5em
</style>
