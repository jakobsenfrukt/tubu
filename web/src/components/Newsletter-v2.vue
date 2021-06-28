<template>
  <section class="newsletter">
    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
    <form action="https://systems.us1.list-manage.com/subscribe/post?u=98560f9ebf97000fbec00bc20&amp;id=ae803c9141" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
      <label for="mce-EMAIL">
        <h2 class="newsletter-heading">{{ $static.general.newsletter.heading }}</h2>
        <p class="newsletter-lead">{{ $static.general.newsletter.text }}</p>
      </label>
      <div class="input-with-submit">
        <label class="hidden-label" for="textinput">
          <span>Subscribe to the TUBU letter</span>
        </label>
        <div class="input-wrapper">
          <input type="email" value="" name="EMAIL" class="text-input email" id="mce-EMAIL" :placeholder="$static.general.newsletter.placeholder" required>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_98560f9ebf97000fbec00bc20_ae803c9141" tabindex="-1" value=""></div>

          <input type="submit" :value="$static.general.newsletter.button" name="subscribe" id="mc-embedded-subscribe" class="button">
          </div>
        </div>
      </div>
    </form>
    </div>
    <div class="disclaimer"><block-content :blocks="$static.general.newsletter._rawDisclaimer" /></div>
    <!--End mc_embed_signup-->
  </section>
</template>

<static-query>
query {
  general: sanityGeneral (id: "general") {
    newsletter {
      heading
      text
      placeholder
      button
      _rawDisclaimer
    }
  }
}
</static-query>

<script>
import BlockContent from '@/components/system/BlockContent'

export default {
  components: {
    BlockContent
  }
}
</script>

<style lang="scss" scoped>
.newsletter {
  margin: 1rem auto;
  padding: 3.6rem 3rem 2rem;
  text-align: center;
  border-radius: .5rem;
  width: 100%;
  max-width: 64rem;

  &-heading {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  &-lead {
    font-family: var(--font-sans);
    letter-spacing: 0.03em;
    margin: 1rem auto;
  }
}
.button {
  border: none;
  letter-spacing: 0.16em;
  margin-bottom: 2rem;
}
.input-with-submit {
  max-width: 500px;
  margin: 0 auto;
  .input-wrapper {
    border: none;
    border-radius: .5rem;
    display: flex;
    column-gap: .5rem;
    padding: .5rem;
    background: var(--color-sun-transparent);
  }
  .text-input {
    border: none;
    border-radius: 0;
    margin: 0 .5rem .2rem;
    padding: 1rem 0 .8rem;
    background: transparent;
    border-bottom: 1px solid var(--color-tubu);
    color: var(--color-tubu);
    letter-spacing: .06em;
  }
  .button {
    margin: 0;
    width: auto;
    letter-spacing: .06em;
  }
}
.disclaimer {
  font-size: 12px;
  margin: 0 auto;
  display: none;
}
.hidden-label {
  visibility: hidden;
  height: 0;
}
@media (max-width: 800px) {
  .newsletter {
    max-width: none;
  }
}
</style>
