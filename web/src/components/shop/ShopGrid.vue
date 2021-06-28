<template>
  <section class="shop-grid">
    <ShopItem
      v-for="product in $static.products.edges.slice(0, limit)"
      :key="product.id"
      :product="product.node"
    />
  </section>
</template>

<static-query>
query {
  products: allSanityProduct(
    sortBy: "publishedAt",
    filter: {active: {eq: true}}
  ) {
    edges {
      node {
        id
        title
        publishedAt(format: "D. MMMM YYYY")
        _rawDetails
        price
        mainImage {
          asset {
            _id
            url
          }
          caption
          alt
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
      }
    }
  }
}
</static-query>

<script>
import ShopItem from '@/components/shop/ShopItem'

export default {
  components: {
    ShopItem
  },
  props: {
    limit: {
      type: Number,
      default: 12
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding: 4rem;
}
@media (max-width: 1200px) {
  .post-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 540px) {
  .post-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>