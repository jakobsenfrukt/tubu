<template>
  <Layout>
    <div class="post">
      <header class="post-header">
        <h1 class="post-title">{{ $page.post.title }}</h1>
        <img
          v-if="$page.post.mainImage"
          :alt="$page.post.mainImage.alt"
          :src="$urlForImage($page.post.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
        <block-content
          class="post-lead"
          :blocks="$page.post._rawLead"
          v-if="$page.post._rawLead"
        />
      </header>

      <div class="post-content">
        <block-content
          :blocks="$page.post._rawBody"
          v-if="$page.post._rawBody"
          class="block-content"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query post ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  post: sanityPost (id: $id) {
    title
    publishedAt (format: "D. MMMM YYYY")
    categories {
      id
      title
    }
    _rawLead
    _rawBody
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
</page-query>

<script>
import BlockContent from '~/components/system/BlockContent'

export default {
  components: {
    BlockContent
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  &-header {
    img {
      display: block;
      width: 100%;
      max-width: 48rem;
      margin: 2rem auto;
    }
  }
  &-title {
    text-transform: none;
    font-size: 3rem;
    text-align: center;
    max-width: 44rem;
    margin: 2rem auto;
    padding: 0 2rem;
  }
  &-lead {
    margin: 3rem auto 4rem;
    font-size: 1.4rem;
  }

  &-content {
    display: flex;
    justify-content: center;
    max-width: 36rem;
    margin: 0 auto;
    
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
</style>
