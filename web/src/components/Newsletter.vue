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
      <input type="email" value="" name="EMAIL" class="text-input email" id="mce-EMAIL" :placeholder="$static.general.newsletter.placeholder" required>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_98560f9ebf97000fbec00bc20_ae803c9141" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" :value="$static.general.newsletter.button" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
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
  margin: 1rem;
  padding: 3.6rem 3rem 2rem;
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
    letter-spacing: 0.03em;
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
  margin-bottom: 2rem;
}
.disclaimer {
  font-size: 12px;
}
@media (max-width: 800px) {
  .newsletter {
    max-width: none;
  }
}
</style>
