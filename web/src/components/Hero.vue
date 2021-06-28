<template>
  <section class="hero">
    
  </section>
</template>

<static-query>
query {
  general: sanityGeneral (id: "general") {
    _rawIntro
  }
}
</static-query>

<script>
import BlockContent from '~/components/system/BlockContent'

export default {
  components: {
    BlockContent
  }
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  min-height: 80vh;
  margin: 1rem 0;
  padding: 0 1rem;
  background-image: url("/assets/images/testing/tubu-hero-sketch.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  img {
    display: block;
    margin: 0 auto;
  }
}
</style>
