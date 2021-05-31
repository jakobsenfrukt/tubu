<template>
  <Layout>
    <h2>Shop</h2>
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor commodo tellus.</p>
    <div class="product-grid">
      <article class="product">
        <div class="product-image">
          <img src="/assets/images/testing/acne.jpg" alt="Alternative text" />
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
          <img src="/assets/images/testing/acne.jpg" alt="Alternative text" />
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
          <img src="/assets/images/testing/acne.jpg" alt="Alternative text" />
        </div>
        <div class="product-text">
          <h3 class="product-title">Product name</h3>
          <p class="product-details">Fusce iaculis varius dolor, et vulputate tortor dignissim vel.</p>
          <span class="product-price">1399</span>
        </div>
        <div class="label label-sale">Sale</div>
      </article>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
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
</style>