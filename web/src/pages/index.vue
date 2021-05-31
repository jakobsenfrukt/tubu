<template>
  <Layout>
    <section class="index">
      <div class="index-grid">
        <div class="index-column">
          <Intro />
        </div>
        <div class="index-column">
          <Newsletter />
        </div>
      </div>
    </section>
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
.index {
  padding: 2rem 0;
  &-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }
}
@media (max-width: 800px) {
  .index {
    padding: 2rem 0;
    &-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
