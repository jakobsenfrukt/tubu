<template>
  <Layout>
    <Hero />
    <section class="index">
      <Intro />
      <ShopGrid limit=4 />
      <!--<LogoHeading text="Letter" />-->
      <Newsletter />
      <!--<LogoHeading text="Readings" />-->
      <PostGrid limit=3 />
    </section>
  </Layout>
</template>

<script>
import Hero from '~/components/Hero'
import Intro from '~/components/Intro'
import Newsletter from '~/components/Newsletter-v2'
import PostGrid from '~/components/read/PostGrid'
import ShopGrid from '~/components/shop/ShopGrid'
import LogoHeading from '~/components/system/LogoHeading'

export default {
  components: {
    Hero,
    Intro,
    Newsletter,
    PostGrid,
    ShopGrid,
    LogoHeading
  },
  metaInfo: {
    title: 'Welcome'
  }
}
</script>

<style lang="scss" scoped>
.index {
  padding: 2rem 2rem;
  margin: 0 auto;
}
@media (max-width: 800px) {
  .index {
    padding: 2rem 0;
  }
}
</style>
