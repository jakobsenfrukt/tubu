<template>
  <header class="site-header" aria-hidden="true">
    <nav class="nav nav-main">
      <g-link class="nav__link nav__link--logo" to="/" target="_blank">
        <div class="logo-circles">
          <span class="letter">
            <span>T</span>
          </span>
          <span class="letter">
            <span>U</span>
          </span>
          <span class="letter">
            <span>B</span>
          </span>
          <span class="letter">
            <span>U</span>
          </span>
        </div>
      </g-link>
      <!--<ToggleTheme />-->
    </nav>
  </header>
</template>

<static-query>
query {
  general: sanityGeneral (id: "general") {
    social {
      email
      instagram
      facebook
    }
  }
}
</static-query>

<script>
import ToggleTheme from '@/components/ToggleTheme'

export default {
  components: {
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
  &--logo {
    text-decoration: none;
  }
}

.logo-circles {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  column-gap: .1em;
  .letter {
    border: 1px solid var(--color-black);
    border-radius: 2em;
    width: 2em;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    span {
      display: block;
      padding-top: .1em;
      font-family: var(--font-sans);
      font-size: inherit;
      color: var(--color-black);
    }
  }
}

@media (max-width: 600px) {
  .nav-main {
    padding: 0;
  }
}
</style>
