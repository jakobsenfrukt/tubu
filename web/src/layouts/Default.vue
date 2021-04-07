<template>
  <div class="layout">
    <header class="site-header">
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/prosjekter/">Posts</g-link>
        <g-link class="nav__link" to="/prosjekter/">Shop</g-link>
        <g-link class="nav__link" to="/info/">Info</g-link>
        <ToggleTheme />
      </nav>
    </header>

    <transition name="fade" appear>
      <main class="site-main">
        <slot/>
      </main>
    </transition>

    <footer class="site-footer">
      <p>(c) TUBU 2021</p>
    </footer>
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
import ToggleTheme from '@/components/ToggleTheme'

export default {
  components: {
    ToggleTheme
  }
}
</script>

<style lang="scss">
.layout {
  margin: 0 auto;
}

.site-header {
  padding: 1rem;
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
  }
}

.site-main {
  padding: 8rem 0;
}

.fade-enter-active {
  transition: opacity .6s;
}

.fade-enter {
  opacity: 0;
}

.site-footer {
  width: 100%;
  text-align: center;
  p {
    margin: 1rem auto;
  }
}
</style>
