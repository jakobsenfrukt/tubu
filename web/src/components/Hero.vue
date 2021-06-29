<template>
  <section class="hero">
    <div class="circles2">
      <div class="graphic">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        </svg>
      </div>
      <div class="circle spring">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="58.6387" cy="58.6387" r="58.6387" fill="#F19696" fill-opacity="0.5"/>
        </svg>
      </div>
      <div class="circle summer">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="141.361" cy="58.6387" r="58.6387" fill="#200AF2" fill-opacity="0.5"/>
        </svg>
      </div>
      <div class="circle fall">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="58.6387" cy="141.361" r="58.6387" fill="#A1A0C8" fill-opacity="0.5"/>
        </svg>
      </div>
      <div class="circle winter">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="141.361" cy="141.361" r="58.6387" fill="#6D8873" fill-opacity="0.5"/>
        </svg>
      </div>
    </div>
    <div class="circles">
      <div class="graphic">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        </svg>
      </div>
      <div class="circle spring">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="58.6387" cy="58.6387" r="58.6387" fill="#F19696" fill-opacity="0.5"/>
        </svg>
      </div>
      <div class="circle summer">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="141.361" cy="58.6387" r="58.6387" fill="#200AF2" fill-opacity="0.5"/>
        </svg>
      </div>
      <div class="circle fall">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="58.6387" cy="141.361" r="58.6387" fill="#A1A0C8" fill-opacity="0.5"/>
        </svg>
      </div>
      <div class="circle winter">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="141.361" cy="141.361" r="58.6387" fill="#6D8873" fill-opacity="0.5"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  general: sanityGeneral (id: "general") {
    _rawIntro
  }
}
</static-query>

<script>
import BlockContent from '~/components/system/BlockContent'

export default {
  components: {
    BlockContent
  }
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 80vh;
  margin: 1rem 0;
  padding: 0 1rem;
  background-image: url("/assets/images/testing/tubu-hero-sketch.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    margin: 0 auto;
  }
}
.circles2 {
  position: absolute;
  left: 0;
  top: 0;
}
.circles {
  position: relative;
  width: 25%;
  .circle {
    text-align: center;
    cursor: pointer;
    transition: opacity .3s ease-in-out;

    svg {
      position: absolute;
      top: 0;
      left: 0;
    }

    &:hover {
      opacity: .5;
    }

    span {
      display: block;
      background: #eee;
      margin: 1rem 0;
    }
  }
}

@media (max-width: 700px) {
  .hero {
    background-size: cover;
    background-position: -10% 10%;
    height: 60vh;
  }
  .circles2 {
    display: none;
  }
}
</style>
