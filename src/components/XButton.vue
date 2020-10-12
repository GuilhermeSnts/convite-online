<template lang="pug">
  .button-wrapper
    button(:class="'button--'+mode" @click="click(to)")
      .icon
        unicon(:name="icon")
      .text {{ label }}
</template>

<script>
export default {
  name: "XButton",
  props: {
    icon: String,
    label: String,
    mode: String,
    to: String
  },

  methods: {
    click(to) {
      this.$emit("click");
      if (to) {
        this.$router.push(to);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.button-wrapper
  display: inline-block
  box-sizing: border-box
  button
    cursor: pointer
    display: flex
    justify-content: left
    vertical-align: middle
    align-items: center
    padding: 5px 15px 5px 10px
    font-family: 'Roboto', sans-serif
    font-size: 11px
    text-transform: uppercase
    letter-spacing: 2.5px
    font-weight: 700
    border: none
    outline: none
    .icon
      width: 35px
      transition: all 0.3s ease 0s
    .text
      width: calc(100% - 35px)
      height: 100%
      align-content: center
      text-align: center
      text-transform: uppercase
    &.button--smooth
      color: #333333
      background-color: #fff
      border-radius: 25px
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1)
      transition: all 0.3s ease 0s
      .icon
        fill: #333333
      &:hover
        background-color: #900020
        box-shadow: 0px 15px 20px rgba(144, 0, 32, 0.4)
        background-image: none
        color: #fff
        transform: translateY(-7px)
        .icon
          fill: white !important
</style>
