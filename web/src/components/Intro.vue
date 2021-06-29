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
  padding: 1rem;
  text-align: center;

  .lead {
    font-size: 2.6rem;
    line-height: 1.3;
    p {
      margin: 0 auto;
    }
  }
}
@media (max-width: 540px) {
  .intro {
    .lead {
      font-size: 2rem;
    }
  }
}
</style>
