<template>
  <section class="post-grid">
    <PostItem
      v-for="post in $static.posts.edges"
      :key="post.id"
      :post="post.node"
    />
  </section>
</template>

<static-query>
query {
  posts: allSanityPost(sortBy: "publishedAt") {
    edges {
      node {
        id
        title
        slug {
          current
        }
        categories {
          id
          title
        }
        publishedAt(format: "D. MMMM YYYY")
        _rawLead
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
import PostItem from '@/components/read/PostItem'

export default {
  components: {
    PostItem
  }
}
</script>

<style lang="scss" scoped>
.post-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  padding: 4rem;
}
@media (min-width: 1800px) {
  .post-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 1200px) {
  .post-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 540px) {
  .post-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>