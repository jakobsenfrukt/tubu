<template>
  <TeaserLayout>
    <section class="index">
      <Circles class="circles" />
    </section>
    <section class="about" id="about">
      <div class="about-content">
        <h1>About us <span>(the short story)</span></h1>
        <p>TUBU is an apparel company currently focusing on making limited edition knitwear with an emphasis on inclusive design.</p>
        <p>We’re a (very) small and humble team of designers and researchers based in Norway and England, all hoping to address the massive systemic issues related to the apparel industry. We — like other parts of nature — are born, bloom, transform and decompose. We are a part of an ecosystem — and TUBU will also change shape in the coming months.</p>
      </div>
    </section>
    <section class="gallery" id="gallery1">
      <div class="images">
        <figure>
          <img src="/assets/images/teaser/IMG_2672.jpeg" alt="An assortment of knitted samples from our factory in Italy in colors such as sand, lilac and peach. Photo." />
        </figure>
        <figure>
          <img src="/assets/images/teaser/IMG_2777.jpeg" alt="A magical little pink knitting machine at our factory in Italy that exclusively knits ribbons. Photo." />
        </figure>
        <figure>
          <img src="/assets/images/teaser/IMG_2769.jpeg" alt="Stacked cones of yarn at our factory in Italy in a myriad of colors such as black, orange, pink and yellow. Photo." />
        </figure>
      </div>
    </section>
    <section class="newsletter" id="newsletter">
      <Newsletter />
    </section>
    <section class="gallery" id="gallery2">
      <div class="images">
        <figure>
          <img src="/assets/images/teaser/IMG_2775.jpeg" alt="A standard cardboard box with the magical words «Made in Italy» printed on it. Photo." />
        </figure>
        <figure>
          <img src="/assets/images/teaser/IMG_2766.jpeg" alt="A photo of a waving Thea Urdal, the founder of TUBU.systems, a woman with blond hair and a protective mask. Photo." />
        </figure>
        <figure>
          <img src="/assets/images/teaser/IMG_2904.jpeg" alt="Shelves of textiles in colors such as light blue, red and pink from Milan. Photo." />
        </figure>
      </div>
    </section>
  </TeaserLayout>
</template>

<script>
import TeaserLayout from '~/layouts/TeaserLayout'
import Circles from '~/components/teaser/Circles'
import Newsletter from '~/components/teaser/Newsletter'

export default {
  components: {
    TeaserLayout,
    Circles,
    Newsletter
  },
  metaInfo: {
    title: 'Welcome'
  }
}
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 var(--site-padding);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  &:before, &:after {
    content: "";
    display: block;
    height: 5rem;
  }
}
.circles {
  width: 30rem;
  max-width: 60%;
  margin: auto;
}

h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;

}

.gallery {
  .images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding-bottom: 1rem;
  }
}
@media (max-width: 900px) {
  section {
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 var(--site-padding);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    &:before, &:after {
      content: "";
      display: block;
      height: 1rem;
    }
  }
  h1 span {
    display: block;
  }
  .gallery {
    .images {
      grid-template-columns: 1fr;
    }
  }
}
</style>
