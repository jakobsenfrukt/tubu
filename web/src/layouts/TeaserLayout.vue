<template>
  <div class="layout">
    <Header />

    <transition name="fade" appear>
      <main class="site-main">
        <slot/>
      </main>
    </transition>

    <Footer />
    <Letters />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '@/components/teaser/Header'
import Footer from '@/components/teaser/Footer'
import Letters from '@/components/teaser/Letters'

export default {
  components: {
    Header,
    Footer,
    Letters
  }
}
</script>

<style lang="scss">
.layout {
  margin: 0 auto;
  font-size: 1.2rem;
}

.fade-enter-active {
  transition: opacity .6s;
}

.fade-enter {
  opacity: 0;
}
</style>
