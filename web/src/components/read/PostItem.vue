<template>
  <article class="post">
    <div class="post-image">
      <g-image
        alt="Cover image"
        v-if="post.mainImage"
        class="post-image"
        :src="$urlForImage(post.mainImage, $static.metadata.sanityOptions).height(500).width(800).auto('format').url()"
      />
    </div>
    <div class="post-text">
      <h3 class="post-title">{{ post.title }}</h3>
      <div class="post-lead" v-if="post._rawLead"><block-content :blocks="post._rawLead" /></div>
    </div>
    <div class="label label-magazine label-recommended">Recommended reading</div>
    <g-link class="post-link" :to="`/read/${post.slug.current}`">Link</g-link>
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
    post: Object
  }
}
</script>

<style lang="scss" scoped>
.post {
  display: block;
  position: relative;
  
  &-text {
    padding-top: 1rem;
  }
  &-title {
    font-size: 1.8rem;
  }
  &-lead {
    font-size: 1.1rem;
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
}
</style>