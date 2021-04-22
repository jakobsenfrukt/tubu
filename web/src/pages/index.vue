<template>
  <Layout>
    <Intro />
    <Newsletter />
    <Collection />
  </Layout>
</template>

<script>
import Intro from '~/components/Intro'
import Newsletter from '~/components/Newsletter'
import Collection from '~/components/system/Collection'

export default {
  components: {
    Intro,
    Newsletter,
    Collection
  },
  metaInfo: {
    title: 'Welcome'
  }
}
</script>

<style lang="scss" scoped>

</style>
