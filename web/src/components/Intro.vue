<template>
  <section class="intro">
    <div class="lead"><block-content :blocks="$static.general._rawIntro" /></div>
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
.intro {
  padding: 0 1rem;

  .lead {
    font-size: 2.6rem;
    line-height: 1.3;
    margin: 0;

    /*background: -webkit-gradient(linear,left top,right top,from(var(--color-tubu)),to(var(--color-sun)));
    background-attachment: fixed;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;*/
  }

  img {
    display: block;
    margin: 0 auto;
  }
}
</style>
