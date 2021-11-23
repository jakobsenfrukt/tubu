<template>
  <section class="newsletter">
    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
      <form action="https://systems.us1.list-manage.com/subscribe/post?u=98560f9ebf97000fbec00bc20&amp;id=ae803c9141" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <label for="mce-EMAIL">
            <h2 class="newsletter-heading">Subscribe to our <br />bi-weekly essay</h2>
          </label>
          <div class="input-with-submit">
            <label class="hidden-label" for="textinput">
              <span>Subscribe to our bi-weekly essay</span>
            </label>
            <div class="input-wrapper">
              <input type="email" value="" name="mce-EMAIL" class="text-input email" id="mce-EMAIL" placeholder="Enter your e-mail" required aria-label="Enter your email to subscribe to our bi-weekly essay">
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_98560f9ebf97000fbec00bc20_ae803c9141" tabindex="-1" value=""></div>

              <input type="submit" :value="$static.general.newsletter.button" name="subscribe" id="mc-embedded-subscribe" class="button">
            </div>
          </div>
          <p>We are true believers in the transparent small business strategy of building in public and want to show you what goes into starting a new apparel brand — from the indigo dark days when funding falls through, to the fluorescent green days when samples come back from the factory looking magical.</p>
          <p>Our shop will open for the release of Batch 1 in the beginning of 2022. That will be exciting, and absolutely nerve-wracking.</p>
          <p>Thank you for your curiosity.</p>
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
  padding: 3.6rem 0 .5rem;
  border-radius: .5rem;
  width: 100%;

  &-heading {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    text-align: center;

    br {
      display: none;
    }
  }
  &-lead {
    font-family: var(--font-sans);
    letter-spacing: 0.03em;
    margin: 1rem auto;
  }
}
.button {
  border: none;
  letter-spacing: var(--letter-spacing);
  margin-bottom: 2rem;
}
.input-with-submit {
  max-width: 38rem;
  margin: 0 auto 2rem;
  font-size: 1.5rem;
  .input-wrapper {
    border: 1px solid var(--color-black);
    border-radius: 5rem;
    display: flex;
    column-gap: .5rem;
    padding: 0;
  }
  .text-input {
    border: none;
    border-radius: 0;
    margin: 0 .5rem .2rem;
    padding: 1rem 1rem .8rem;
    background: transparent;
    color: var(--color-black);
    font-size: inherit;
    max-width: none;
  }
  .button {
    margin: 0;
    width: auto;
    font-size: inherit;
    border-radius: 5rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
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
     &-heading {
      br {
        display: block;
      }
    }
  }
  .input-with-submit {
    .input-wrapper {
      display: block;
      border: none;
    }
    .text-input {
      border: 1px solid var(--color-black);
      border-radius: 5rem;
      margin: 0 0 1rem;
      padding: 1rem 1.5rem 1rem;
      text-align: center;
    }
    .button {
      width: 100%;
      border-top-left-radius: 5rem;
      border-bottom-left-radius: 5rem;
      max-width: none;
    }
  }
}
</style>
