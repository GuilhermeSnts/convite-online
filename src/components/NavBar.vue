<template lang="pug">
    vs-navbar(center-collapsed fixed shadow v-model="active")
        template( #left)
           img( src="/logo.png" alt="")
        template( #right)
            vs-navbar-item
                span Guide
       
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    active: true
  })
};
</script>
