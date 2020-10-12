<template lang="pug">
  .home
    CoverImage( src="https://images.unsplash.com/photo-1553102674-af685bb5fe40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60")
    TitleBlock Noiva & Noivo
    TextBlock ABC da Amazônia: Pato no tucupi. Comer pato é coisa comum no pará, e o pato no tucupi está sempre na mesa em dias de festa. É considerado o prato que não pode faltar no círio de Nazaré, uma das maiores festas religiosas do país. Existem muitos criadores de pato no Pará, alguns apuram a raça a partir de vários cruzamentos, inclusive com patos selvagens, a carne é escura e firme preparado com vários temperos, o pato é assado cortado em pedaços e mergulhado no tucupi, um caldo amarelo extraído da mandioca, o último toque vem do jambu, planta picante que provoca ligeira dormência na boca e que faz parte de muitas receitas da cozinha paraense.
    
    TextBlock
      h3 Dia 15/16/20

    .row
      MapButton
      MapButton
    
</template>

<script>
// @ is an alias to /src
import CoverImage from "@/components/CoverImage.vue";
import TextBlock from "@/components/TextBlock.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import MapButton from "@/components/MapButton.vue";

export default {
  name: "Home",
  components: {
    CoverImage,
    TextBlock,
    TitleBlock,
    MapButton
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
