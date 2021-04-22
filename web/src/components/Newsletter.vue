<template>
  <section class="newsletter">
    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
    <form action="https://systems.us1.list-manage.com/subscribe/post?u=98560f9ebf97000fbec00bc20&amp;id=ae803c9141" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
      <label for="mce-EMAIL">
        <strong>Subscribe to our newsletter</strong><br />
        <span>Be the first to know when we launch!</span>
      </label>
      <input type="email" value="" name="EMAIL" class="text-input email" id="mce-EMAIL" placeholder="Your email address" required>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_98560f9ebf97000fbec00bc20_ae803c9141" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Sign up" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
    </form>
    </div>
    <!--End mc_embed_signup-->
    <p>Our newsletter is sent out bi-weekly, containing ...</p>
  </section>
</template>

<style lang="scss" scoped>
.newsletter {
  margin: 1rem;
  padding: 4rem;
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
  border-radius: .5rem;
  outline: none;
}
input.email {
  border: 2px solid var(--color-tubu);
}
.button {
  border: none;
  background: var(--color-tubu);
  color: var(--color-white);
}
</style>
