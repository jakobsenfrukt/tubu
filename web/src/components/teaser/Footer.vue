<template>
  <footer class="site-footer">
    <div class="site-footer-content">
      <nav class="nav nav-footer">
        <button class="nav-button" @click="toAnchor('#about')">
          <span>About</span>
        </button>
        <button class="nav-button" @click="toAnchor('#newsletter')">
          <span>Newsletter</span>
        </button>
        <a class="nav-button" :href="`https://instagram.com/${$static.general.social.instagram}`" target="_blank">
          <span>Instagram</span>
        </a>
        <!--<ToggleTheme />-->
      </nav>
    </div>
  </footer>
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
import FooterTotem from '@/components/system/logo/FooterTotem'

export default {
  components: {
    FooterTotem
  },
  methods: {
    toAnchor(anchor) {
      document.querySelector(anchor).scrollIntoView({
          behavior: 'smooth'
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.site-footer {
  width: 100%;
  color: var(--color-tubu);
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.nav-footer {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  column-gap: .2em;
}
.nav-button {
  font-size: inherit;
  font-family: var(--font-sans);
  border: 1px solid var(--color-black);
  border-radius: 2em;
  padding: 0 1rem;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  span {
    display: block;
    padding-top: .1em;
    font-family: var(--font-sans);
    font-size: inherit;
    color: var(--color-black);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
  }
}

@media (max-width: 600px) {
  .site-footer {
    position: absolute;
  }
  .nav-footer {
    flex-direction: column;
    padding: 0;
  }
  .nav-button {
    margin: .25rem 0;
  }
}
</style>
