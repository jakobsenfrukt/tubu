<template>
  <TeaserLayout>
    <section class="index">
      <Circles class="circles" />
      <Newsletter class="newsletter" />
    </section>
  </TeaserLayout>
</template>

<script>
import TeaserLayout from '~/layouts/TeaserLayout'
import Circles from '~/components/teaser/Circles'
import Newsletter from '~/components/teaser/Newsletter'

export default {
  components: {
    TeaserLayout,
    Circles,
    Newsletter
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
  display: grid;
  align-items: center;
  justify-content: center;
}
.circles {
  width: 20rem;
  max-width: 50%;
  margin: auto;
}
</style>
