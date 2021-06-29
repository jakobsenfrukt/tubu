<template>
  <div class="layout">
    <Header />
    <Letters />

    <transition name="fade" appear>
      <main class="site-main">
        <slot/>
      </main>
    </transition>

    <Footer />
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
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Letters from '@/components/system/logo/Letters'

export default {
  components: {
    Header,
    Footer,
    Letters
  }
}
</script>

<style lang="scss" scoped>
.layout {
  margin: 0 auto;
}

.site-main {
  margin-top: 3rem;
  min-height: 180vh;
}

.fade-enter-active {
  transition: opacity .6s;
}

.fade-enter {
  opacity: 0;
}
</style>
