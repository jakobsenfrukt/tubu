<template>
  <article class="product">
    <div class="product-image">
      <g-image
        v-if="product.mainImage"
        class="product-image"
        :src="$urlForImage(product.mainImage, $static.metadata.sanityOptions).height(800).width(500).auto('format').url()"
        :alt="product.mainImage.alt"
      />
    </div>
    <div class="product-text">
      <div class="product-header">
        <h3 class="product-title">{{ product.title }}</h3>
        <span class="product-price">{{ product.price }} NOK</span>
      </div>
      <p class="product-details">{{ product._rawDetails }}</p>
    </div>
    <div class="label label-new">New</div>
  </article>
</template>

<static-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
}
</static-query>

<script>
import BlockContent from '@/components/system/BlockContent'

export default {
  components: {
    BlockContent
  },
  props: {
    product: Object
  }
}
</script>

<style lang="scss" scoped>
.product {
  display: block;
  position: relative;
  border-radius: calc(var(--radius)/3);
  transition: all .2s ease-in-out;

  &-text {
    padding-top: .2rem;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  &-title {
    font-size: 1.2rem;
    margin: 0;
    font-family: var(--font-sans);
    font-weight: normal;
  }
  &-price {
    display: block;
    font-size: .8rem;
  }
  &-details {
    font-size: .8rem;
    display: none;
  }
  &-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }

  &:hover {
    background: rgba(0, 0, 0, .06);
    box-shadow: 0 0 0 1rem rgba(0, 0, 0, .06);
  }
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
  position: absolute;
  top: -.3rem;
  right: -.3rem;

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
}
@media (max-width: 900px) {
  .product {
    &-header {
      display: block;
    }
    &-price {
      float: right;
    }
  }
}
</style>