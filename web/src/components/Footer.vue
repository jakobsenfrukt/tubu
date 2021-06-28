<template>
  <footer class="site-footer">
    <div class="site-footer-content">
      <div class="intro">
        TUBU is a digital resource and capsule wardrobe system for all seasons of womanhood.
      </div>
      <div>
        <ul class="link-list social">
          <li><strong>Contact</strong></li>
          <li><a :href="`mailto:${$static.general.social.email}`" target="_blank">E-mail</a></li>
          <li><a :href="`https://instagram.com/${$static.general.social.instagram}`" target="_blank">Instagram</a></li>
          <li><a :href="`https://facebook.com/${$static.general.social.facebook}`" target="_blank">Facebook</a></li>
        </ul>
      </div>
      <div>
        <ul class="link-list read">
          <li><strong>Read</strong></li>
          <li><a :href="`mailto:${$static.general.social.email}`" target="_blank">Interviews</a></li>
          <li><a :href="`https://instagram.com/${$static.general.social.instagram}`" target="_blank">Health</a></li>
          <li><a :href="`https://facebook.com/${$static.general.social.facebook}`" target="_blank">Recommended</a></li>
        </ul>
      </div>
      <div>
        <ul class="link-list shop">
          <li><strong>Shop</strong></li>
          <li><a :href="`mailto:${$static.general.social.email}`" target="_blank">Spring</a></li>
          <li><a :href="`https://instagram.com/${$static.general.social.instagram}`" target="_blank">Summer</a></li>
          <li><a :href="`https://facebook.com/${$static.general.social.facebook}`" target="_blank">Fall</a></li>
          <li><a :href="`https://facebook.com/${$static.general.social.facebook}`" target="_blank">Winter</a></li>
        </ul>
      </div>
      <div></div>
      <div class="end-notes">
        <a :href="`mailto:${$static.general.social.email}`" target="_blank">Privacy policy</a>
      </div>
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

<style lang="scss" scoped>
.site-footer {
  width: 100%;
  background: var(--color-sun);
  color: var(--color-tubu);
  padding: 4rem 2rem;
  
  &-content {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 3rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
  }

  .intro {
    grid-column: span 2;
  }

  .link-list {
    list-style: none;

    strong {
      font-family: var(--font-tightblack);
      font-size: 1.2rem;
    }

    li {
      display: block;
      color: inherit;
      text-decoration: none;
      margin-right: 1.8rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      font-family: var(--font-sans);
    }
  }
}
</style>
