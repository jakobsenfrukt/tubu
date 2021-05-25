<template>
  <Layout>
    <h1>{{ $page.about.title }}</h1>
    <div class="lead"><block-content :blocks="$page.about._rawLead" /></div>
    <div class="content"><block-content :blocks="$page.about._rawBody" /></div>
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

</style>
