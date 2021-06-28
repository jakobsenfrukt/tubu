<template>
  <header class="site-header">
    <div class="logo-wrapper">
      <g-link class="logo" to="/"><Logo /></g-link>
    </div>
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/read/">Read</g-link>
      <g-link class="nav__link" to="/shop/">Shop</g-link>
      <g-link class="nav__link" to="/info/">Info</g-link>
      <!--<ToggleTheme />-->
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/system/Logo'
import ToggleTheme from '@/components/ToggleTheme'

export default {
  components: {
    Logo,
    ToggleTheme
  }
}
</script>

<style lang="scss" scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem;
  color: var(--color-tubu);
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .logo-wrapper {
    width: 14rem;
  }
  nav {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  .nav__link {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    padding: .5rem 1rem .3rem;
    background: var(--color-rose-transparent);
    border-radius: var(--radius);
    transition: all .2s ease-in-out;

    &:hover {
      background: rgba(255, 47, 203, 0.2);
    }
    &.logo {
      display: block;
    }
  }
}
</style>
