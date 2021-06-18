<template>
  <footer class="site-footer">
    <ul class="social">
      <li><a :href="`mailto:${$static.general.social.email}`" target="_blank">E-mail</a></li>
      <li><a :href="`https://instagram.com/${$static.general.social.instagram}`" target="_blank">Instagram</a></li>
      <li><a :href="`https://instagram.com/${$static.general.social.facebook}`" target="_blank">Facebook</a></li>
    </ul>
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
  text-align: center;
  background: var(--color-sun);
  padding: 4rem 2rem;
  
  p {
    margin: 1rem auto;
  }
  .social {
    list-style: none;

    li {
      display: inline-block;
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
