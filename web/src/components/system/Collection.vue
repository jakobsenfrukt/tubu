<template>
  <div class="system">
    <section>
      Design system
      <h2>Headings</h2>
      <h1>Heading level 1 <span class="marker">h1</span></h1>
      <h2>Heading level 2 <span class="marker">h2</span></h2>
      <h3>Heading level 3 <span class="marker">h3</span></h3>
      <h4>Heading level 4 <span class="marker">h4</span></h4>
      <h5>Heading level 5 <span class="marker">h5</span></h5>
      <h6>Heading level 6 <span class="marker">h6</span></h6>
      <p class="lead">This is the <strong>lead text style</strong>. Lorem ipsum dolor sit amet, <em>consectetur adipiscing</em> elit. Donec porttitor commodo tellus, ac porta neque mollis et. Fusce iaculis varius dolor, et vulputate tortor dignissim vel.</p>
      <p>This is the paragraph style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor commodo tellus, ac porta neque mollis et. Fusce iaculis varius dolor, et vulputate tortor dignissim vel.</p>
      <blockquote>This is the quote style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor commodo tellus, ac porta neque mollis et.</blockquote>
    </section>
    <section>
      <h2>Logo &amp; color palette</h2>
      <div class="logos">
        <Logo />
        <Totem />
        <Wave />
      </div>
      <ColorPalette />
    </section>
    <section>
      <h2>Links, buttons &amp; inputs</h2>
      <p>A text with <a href="#">a link</a> in it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor commodo tellus, ac porta neque mollis et.</p>
      <a href="#">A standard link</a>
      <button class="button">A real button</button>
      <a href="#" class="button">A fake button</a>
      <label for="textinput">
        <span>A text input</span>
        <input type="text" name="textinput" id="textinput" class="text-input" placeholder="Your text here" />
      </label>
      <input type="submit" name="submitinput" id="submitinput" class="button" value="Submit" />
      <h3>Share your story <span class="marker">(A text area)</span></h3>
      <textarea></textarea>
    </section>
    <section>
      <h2>Labels &amp; misc</h2>
      <div class="shop-labels">
        <div class="label label-soldout">Sold out</div>
        <div class="label label-sale">Sale</div>
        <div class="label label-new">New</div>
      </div>
      <div class="magazine-labels">
        <div class="label label-magazine label-category1">Mom heroes</div>
        <div class="label label-magazine label-category2">The Weekly Q</div>
        <div class="label label-magazine label-recommended">Recommended reading</div>
      </div>
      <h1 class="logo-heading">
        Readings
        <Wave class="logo" />
      </h1>
      <h1 class="logo-heading" style="color: var(--color-rose)">
        Newsletter
        <Wave class="logo" />
      </h1>
      <h1 class="logo-heading" style="color: var(--color-peach)">
        Bellytech
        <Wave class="logo" />
      </h1>
    </section>
    <section>
      <h2>Shop</h2>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor commodo tellus.</p>
      <div class="product-grid">
        <article class="product">
          <div class="product-image">
            <img src="/images/testing/acne.jpg" alt="Alternative text" />
          </div>
          <div class="product-text">
            <h3 class="product-title">Product name</h3>
            <p class="product-details">Fusce iaculis varius dolor, et vulputate tortor dignissim vel.</p>
            <span class="product-price">1399</span>
          </div>
          <div class="label label-soldout">Sold out</div>
        </article>
        <article class="product">
          <div class="product-image">
            <img src="/images/testing/acne.jpg" alt="Alternative text" />
          </div>
          <div class="product-text">
            <h3 class="product-title">Product name</h3>
            <p class="product-details">Fusce iaculis varius dolor, et vulputate tortor dignissim vel.</p>
            <span class="product-price">1399</span>
          </div>
          <div class="label label-new">New</div>
        </article>
        <article class="product">
          <div class="product-image">
            <img src="/images/testing/acne.jpg" alt="Alternative text" />
          </div>
          <div class="product-text">
            <h3 class="product-title">Product name</h3>
            <p class="product-details">Fusce iaculis varius dolor, et vulputate tortor dignissim vel.</p>
            <span class="product-price">1399</span>
          </div>
          <div class="label label-sale">Sale</div>
        </article>
      </div>
    </section>
    <section>
      <h2>Magazine</h2>
      <div class="post-grid">
        <article class="post">
          <div class="post-image">
            <img src="/images/testing/sleepingmom.jpg" alt="Alternative text" />
          </div>
          <div class="post-text">
            <h3 class="post-title">Title of this article</h3>
            <p class="post-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor commodo tellus. Fusce iaculis varius dolor, et vulputate tortor dignissim vel.</p>
          </div>
          <div class="label label-magazine label-category1">Mom heroes</div>
        </article>
        <article class="post">
          <div class="post-image">
            <img src="/images/testing/sleepingmom.jpg" alt="Alternative text" />
          </div>
          <div class="post-text">
            <h3 class="post-title">Title of this article</h3>
            <p class="post-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor commodo tellus. Fusce iaculis varius dolor, et vulputate tortor dignissim vel.</p>
          </div>
          <div class="label label-magazine label-category2">The Weekly Q</div>
        </article>
        <article class="post">
          <div class="post-image">
            <img src="/images/testing/sleepingmom.jpg" alt="Alternative text" />
          </div>
          <div class="post-text">
            <h3 class="post-title">Title of this article</h3>
            <p class="post-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor commodo tellus. Fusce iaculis varius dolor, et vulputate tortor dignissim vel.</p>
          </div>
          <div class="label label-magazine label-recommended">Recommended reading</div>
        </article>
      </div>
    </section>
    <section>
      <h2>Newsletter template</h2>
      <div class="newsletter-template">
        <h2>Hi there</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor commodo tellus, ac porta neque mollis et. Fusce iaculis varius dolor, et vulputate tortor dignissim vel.</p>
        <img src="/images/testing/nike.png" alt="Alternative text" />
      </div>
      <h1 class="logo-heading">
        Newsletter
        <Wave class="logo" />
      </h1>
      <p class="lead">Sign up to receive bi-weekly inspiration and reading material from TUBU!</p>
      <h2 style="color: var(--color-peach)">Launching summer 2021</h2>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/system/Logo'
import Totem from '~/components/system/Totem'
import Wave from '~/components/system/Wave'
import ColorPalette from '~/components/system/ColorPalette'

export default {
  components: {
    Logo,
    Totem,
    Wave,
    ColorPalette
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 5rem auto;
  max-width: 90%;
  padding-bottom: 5rem;
  position: relative;

  &:after {
    content: " ";
    height: 5px;
    width: 100%;
    display: block;
    background: var(--color-tubu-light);
    border-radius: 10px;
    position: absolute;
    bottom: 0;
  }
}
.marker {
  font-size: 1rem;
  font-family: var(--font-sans);
  vertical-align: top;
}
.newsletter-template {
  max-width: 600px;
  margin: 1rem auto;
  border: 3px solid var(--color-tubu);
  border-radius: .5rem;
  padding: 1.5rem 2rem;

  h2 {
    font-size: 40px;
  }
}
.logos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin: 2rem 0;
}
.label {
  display: inline-block;
  background: var(--color-tubu);
  padding: .2rem .6rem;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  transform: rotate(7deg);
  margin-right: 2rem;

  &-soldout {
    background: var(--color-rose);
    color: var(--color-white);
  }
  &-sale {
    background: var(--color-sun);
  }
  &-new {
    background: var(--color-lime);
  }

  &-magazine {
    transform: none;
  }
  &-category1 {
    background: var(--color-rose-light);
  }
  &-category2 {
    background: var(--color-sun-light);
  }
  &-recommended {
    background: var(--color-lime-light);
  }
}
.shop-labels, .magazine-labels {
  margin-bottom: 2rem;
}
.logo-heading {
  position: relative;
  text-align: center;
  margin: 5rem 0;
  color: var(--color-tubu);
  .logo {
    position: absolute;
    top: -50%;
    left: 30%;
    width: 10%;
    color: var(--color-lime);
  }
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
}
.product {
  display: block;
  box-shadow: 0 0 .6rem rgba(0, 0, 0, .1);
  border-radius: .5rem;
  position: relative;
  &-image {
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    height: 20rem;
    overflow: hidden;
    img {
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem;
    }
  }
  &-text {
    padding: 1rem;
  }
  &-title {
    font-size: 1.4rem;
  }
  .label {
    position: absolute;
    top: -.2rem;
    right: -.3rem;
    margin: 0;
  }
  transition: all .1s ease-in-out;
  &:hover {
    box-shadow: 0 0 .6rem rgba(0, 0, 0, .2);
    cursor: pointer;
  }
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
.post {
  display: block;
  position: relative;
  &-text {
    padding-top: 1rem;
  }
  &-title {
    font-size: 1.4rem;
  }
}
</style>
