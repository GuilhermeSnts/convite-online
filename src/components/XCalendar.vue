<template lang="pug">
  .x-calendar
    .block 
        .item.day(v-for="(item, index) in day" :key="index") {{item}}
    .block 
        .item(v-for="(item, index) in month" :key="index") {{item}}
    .block 
        .item(v-for="(item, index) in year" :key="index") {{item}}
    
    .hour at {{hour}}
    
</template>

<script>
export default {
  name: "XCalendar",

  computed: {
    day() {
      return this.date.split("/")[2];
    },
    month() {
      return new Date(this.date).toLocaleString("default", { month: "long" });
    },
    year() {
      return this.date.split("/")[0];
    }
  },

  props: {
    date: String,
    hour: String
  }
};
</script>

<style scoped lang="sass">
@import url("https://fonts.googleapis.com/css2?family=Sansita+Swashed&display=swap")
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap')
.x-calendar
    line-height: 1.1
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    .hour
      margin-top: 1em
      font-family: 'Open Sans', sans-serif
      font-size: 2em
    .block
        text-align: center
        width: 50%
        max-width: 350px
        display: flex
        flex-direction: row
        justify-content: space-between
        .item
            font-size: 2em
            width: fit-content
            text-transform: uppercase
            font-family: 'Open Sans', sans-serif
        .day
            font-family: "Sansita Swashed", cursive
            font-size: 10em
            letter-spacing: 0.1em
</style>
