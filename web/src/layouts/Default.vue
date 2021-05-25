<template>
  <div class="layout">
    <header class="site-header">
      <div class="logo-wrapper">
        <g-link class="nav__link logo" to="/"><Logo /></g-link>
      </div>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/read/">Read</g-link>
        <g-link class="nav__link" to="/shop/">Shop</g-link>
        <g-link class="nav__link" to="/info/">Info</g-link>
        <!--<ToggleTheme />-->
      </nav>
    </header>

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
import Logo from '@/components/system/Logo'
import ToggleTheme from '@/components/ToggleTheme'
import Footer from '@/components/Footer'

export default {
  components: {
    Logo,
    ToggleTheme,
    Footer
  }
}
</script>

<style lang="scss">
.layout {
  margin: 0 auto;
}

.site-header {
  padding: 1rem;
  color: var(--color-tubu);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-wrapper {
    width: 14rem;
  }
  nav {
    display: flex;
    align-items: center;
  }

  .nav__link {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    margin-right: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;

    &:hover {
      text-decoration: underline wavy;
    }
    &.logo {
      display: block;
    }
  }
}

.fade-enter-active {
  transition: opacity .6s;
}

.fade-enter {
  opacity: 0;
}
</style>
