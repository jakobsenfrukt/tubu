<template>
  <div class="toplink">
    <button @click="toTop()" class="toplink-button" :class="{inview: isInView}">
      <span>&uarr; To top</span>
    </button>
    <IntersectionObserver
      id="totop"
      class="observer"
      @on-enter-viewport="onEnterViewport"
    ></IntersectionObserver>
  </div>
</template>

<script>
import IntersectionObserver from '@/components/tools/IntersectionObserver.vue'

export default {
  components: {
    IntersectionObserver
  },
  data() {
    return {
      isInView: false
    }
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    onEnterViewport(value) {
      this.isInView = value;
      if (value === false) {
        return
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.toplink {
  display: none;
}
.observer {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 2rem;
}

@media (max-width: 600px) {
  .toplink {
    display: block;
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    position: relative;

    &-button {
      margin: 0 auto;
      line-height: 1;
      font-size: inherit;
      border: 1px solid var(--color-black);
      border-radius: 2em;
      padding: 0 1rem;
      height: 2em;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      text-decoration: none;
      background: transparent;
      cursor: pointer;
      span {
        display: block;
        padding-top: .2em;
        font-family: var(--font-sans);
        font-size: inherit;
        color: var(--color-black);
        text-transform: uppercase;
        letter-spacing: var(--letter-spacing);
      }

      opacity: 0;
      transition: opacity .3s linear;

      &.inview {
        opacity: 1;
      }
    }
  }
}
</style>