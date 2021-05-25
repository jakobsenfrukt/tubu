<template>
  <Layout>
    <Intro />
    <Newsletter />
  </Layout>
</template>

<script>
import Intro from '~/components/Intro'
import Newsletter from '~/components/Newsletter'

export default {
  components: {
    Intro,
    Newsletter
  },
  metaInfo: {
    title: 'Welcome'
  }
}
</script>

<style lang="scss" scoped>

</style>
