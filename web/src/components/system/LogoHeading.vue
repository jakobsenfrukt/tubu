<template>
  <h1 class="logo-heading">
    {{ text }}
    <Wave class="logo" />
  </h1>
</template>

<script>
import Wave from '~/components/system/Wave'

export default {
  props: {
    text: String
  },
  components: {
    Wave
  }
}
</script>

<style lang="scss" scoped>
.logo-heading {
  position: relative;
  text-align: center;
  margin: 1rem 0;
  color: var(--color-rose);
  display: inline-block;
  font-size: 5rem;
  .logo {
    position: absolute;
    top: -50%;
    left: 30%;
    width: 1em;
    color: var(--color-lime);
  }
}
</style>
