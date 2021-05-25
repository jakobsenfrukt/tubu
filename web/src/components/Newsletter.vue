<template>
  <section class="newsletter">
    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
    <form action="https://systems.us1.list-manage.com/subscribe/post?u=98560f9ebf97000fbec00bc20&amp;id=ae803c9141" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
      <label for="mce-EMAIL">
        <h2 class="newsletter-heading">Letters from TUBU</h2>
        <p class="newsletter-lead">Sign up to receive our bi-weekly emails with stories, news and offers from the shop.</p>
      </label>
      <input type="email" value="" name="EMAIL" class="text-input email" id="mce-EMAIL" placeholder="Your email address" required>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_98560f9ebf97000fbec00bc20_ae803c9141" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Sign up" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
    </form>
    </div>
    <!--End mc_embed_signup-->
  </section>
</template>

<style lang="scss" scoped>
.newsletter {
  margin: 1rem;
  padding: 4rem 3rem;
  text-align: center;
  background: linear-gradient(45deg, var(--color-tubu), var(--color-tubu), var(--color-tubu-light));
  color: var(--color-background);
  border-radius: .5rem;
  max-width: 23rem;

  &-heading {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  &-lead {
    font-family: var(--font-sans);
  }
}
input {
  display: block;
  padding: 1rem 1.2rem;
  font-size: 1rem;
  font-family: inherit;
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
  border-radius: .5rem;
  outline: none;
}
input.email {
  border: 2px solid var(--color-background);
  background: transparent;
  color: var(--color-background);

  &::placeholder {
    color: inherit;
    opacity: .5;
    text-align: center;
  }
  &:focus {
    border-color: var(--color-lime);
  }
}
.button {
  border: none;
  background: var(--color-background);
  color: var(--color-tubu);
  text-transform: uppercase;
  letter-spacing: 0.16em;
}
</style>
