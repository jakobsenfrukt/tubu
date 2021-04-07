<template>
  <section class="newsletter">
    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
    <form action="https://systems.us1.list-manage.com/subscribe/post?u=98560f9ebf97000fbec00bc20&amp;id=ae803c9141" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
      <label for="mce-EMAIL">Subscribe to the TUBU newsletter</label>
      <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_98560f9ebf97000fbec00bc20_ae803c9141" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
    </form>
    </div>
    <!--End mc_embed_signup-->
  </section>
</template>

<style lang="scss">
.newsletter {
  margin: 2rem auto;
  max-width: 900px;
  padding: 0 4rem;
  text-align: center;
}
input {
  display: block;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-family: inherit;
  width: 100%;
  max-width: 360px;
  margin: 1rem auto;
}
input.email {
  border-color: var(--color-tubu);
}
.button {
  border: none;
  background: var(--color-tubu);
}
</style>
