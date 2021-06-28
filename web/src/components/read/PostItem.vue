<template>
  <article class="post">
    <div class="post-image">
      <g-image
        v-if="post.mainImage"
        class="post-image"
        :src="$urlForImage(post.mainImage, $static.metadata.sanityOptions).height(500).width(800).auto('format').url()"
        :alt="post.mainImage.alt"
      />
    </div>
    <div class="post-text">
      <div v-if="post.categories.length" class="label label-magazine" :class="`label-${post.categories[0].title.toLowerCase()}`">{{ post.categories[0].title }}</div>
      <div v-else class="label label-magazine label-recommended">Recommended reading</div>
      <h3 class="post-title">{{ post.title }}</h3>
      <div class="post-lead" v-if="post._rawLead"><block-content :blocks="post._rawLead" /></div>
    </div>
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
  border-radius: calc(var(--radius)/3);
  transition: all .2s ease-in-out;
  
  &-text {
    padding-top: .2rem;
  }
  &-title {
    font-size: 1.8rem;
    margin-bottom: .6rem;
  }
  &-lead {
    font-size: 1rem;
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
  color: var(--color-tubu);
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: .8rem;
  transform: rotate(7deg);
  margin: 0 0 .8rem 0;

  &-magazine {
    transform: none;
  }
  &-category1 {
    color: var(--color-rose);
  }
  &-interview {
    color: var(--color-lime-dark);
  }
  &-recommended {
    color: var(--color-rose);
  }
}
</style>