<template>
  <header class="site-header">
    <div class="logo-wrapper">
      <g-link class="logo" to="/"><Totem /></g-link>
    </div>
    <nav class="nav nav-main">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/shop/">Shop</g-link>
      <g-link class="nav__link" to="/read/">Read</g-link>
      <g-link class="nav__link" to="/info/">Info</g-link>
      <!--<ToggleTheme />-->
    </nav>

    <div class="nav-mobile" :class="{showMenu: showMenu}">
      <button class="menu-toggle" @click="showMenu = !showMenu">Menu</button>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/shop/">Shop</g-link>
        <g-link class="nav__link" to="/read/">Read</g-link>
        <g-link class="nav__link" to="/info/">Info</g-link>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/system/Logo'
import Totem from '@/components/system/Totem'
import Letters from '@/components/system/logo/Letters'
import ToggleTheme from '@/components/ToggleTheme'

export default {
  components: {
    Logo,
    Totem,
    Letters,
    ToggleTheme
  },
  data() {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
.site-header {
  .logo-wrapper {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1000;
  }
}
.nav-main {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem;
  color: var(--color-tubu);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  margin-top: 1rem;
}

.nav__link {
  display: inline-block;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  padding: .5rem 1rem .3rem;
  background: var(--color-sun-transparent);
  border-radius: var(--radius);
  transition: all .2s ease-in-out;

  &:hover {
    background: rgba(255, 47, 203, 0.2);
  }
  &.logo {
    display: block;
  }
}
.nav-mobile {
  display: none;
}
.menu-toggle {
  width: auto;
  margin: 0 auto;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  padding: .5rem 1rem .3rem;
  background: transparent;
  border-radius: var(--radius);
  transition: all .2s ease-in-out;

  &:hover {
    background: transparent;
  }
}
@media (max-width: 640px) {
  .nav-main {
    display: none;
  }
  .nav-mobile {
    display: block;
    height: 2rem;
    background: var(--color-sun-transparent);
    border-radius: var(--radius);
    overflow: hidden;
    position: fixed;
    top: 1rem;
    left: 0;
    right: 0;
    width: 6rem;
    margin: 0 auto;
    z-index: 1000;
    transition: all .4s ease-in-out;
    &.showMenu {
      height: 100%;
      width: 100%;
      top: 0;
      .nav {
        visibility: visible;
      }
      .menu-toggle {
        margin-top: 1rem;
      }
    }

    .nav {
      visibility: hidden;
      height: 100%;
      padding-bottom: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      &__link {
        font-size: 2rem;
        background: white;
      }
    }
  }
}
</style>
