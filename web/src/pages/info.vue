<template>
  <Layout>
    <div class="about">
      <header class="about-header">
        <h1 class="about-title">{{ $page.about.title }}</h1>
        <div class="about-lead"><block-content :blocks="$page.about._rawLead" /></div>
      </header>
      <div class="content about-content"><block-content :blocks="$page.about._rawBody" /></div>
    </div>
  </Layout>
</template>

<page-query>
query {
  about: sanityAbout (id: "about") {
    title
    _rawLead
    _rawBody
  }
}
</page-query>

<script>
import BlockContent from '~/components/system/BlockContent'

export default {
  components: {
    BlockContent
  },
  metaInfo: {
    title: 'Info'
  }
}
</script>

<style lang="scss" scoped>
.about {
  padding-top: 7rem;
  &-header {
    img {
      display: block;
      width: 100%;
      max-width: 48rem;
      margin: 2rem auto;
    }
  }
  &-title {
    text-transform: none;
    font-size: 3rem;
    text-align: center;
    max-width: 44rem;
    margin: 2rem auto;
    padding: 0 2rem;
  }
  &-lead {
    margin: 3rem auto 4rem;
    font-size: 1.4rem;
    max-width: 36rem;
  }

  &-content {
    display: flex;
    justify-content: center;
    max-width: 36rem;
    margin: 0 auto;
    
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
</style>
