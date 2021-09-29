<template>
  <div class="logo letters">
    <div class="letter-wrapper">
      <svg class="letter letter-t" viewBox="0 0 82 82" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.1 36.2H11.1C8.3 36.2 6 33.9 6 31.1V7.1C6 4.3 8.3 2 11.1 2H69.9C72.7 2 75 4.3 75 7.1V31.1C75 33.9 72.7 36.2 69.9 36.2H63C60.2 36.2 57.9 38.5 57.9 41.3V74.4C57.9 77.2 55.6 79.5 52.8 79.5H28.4C25.6 79.5 23.3 77.2 23.3 74.4V41.3C23.2 38.5 20.9 36.2 18.1 36.2Z" />
      </svg>
      <svg class="letter letter-u" viewBox="0 0 82 82" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.025 2H33.725C35.325 2 36.625 3.3 36.625 4.9C36.625 16.1 36.625 27.2 36.625 38.4C36.625 40.5 36.825 42.6 37.525 44.5C37.925 45.6 39.525 46.6 40.825 46.9C42.425 47.2 44.025 46.4 44.425 44.5C44.825 42.6 45.225 40.6 45.225 38.6C45.325 27.3 45.225 15.9 45.225 4.6C45.225 3.2 46.325 2.1 47.725 2.1H77.925C79.025 2.1 79.825 3 79.825 4C79.825 16.2 79.925 28.5 79.825 40.7C79.725 47.7 78.725 54.7 76.025 61.2C71.925 71 64.725 77.3 54.325 79.7C45.725 81.6 37.125 81.9 28.525 79.8C14.725 76.4 6.425 67.4 3.625 53.6C2.725 49 2.225 44.2 2.125 39.5C1.925 28 2.025 16.5 2.025 5C2.025 3.4 3.325 2 5.025 2Z" />
      </svg>
      <svg class="letter letter-b" viewBox="0 0 82 82" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M69.1 40.416V40.516C70.7 41.616 72.1 42.516 73.5 43.516C85.2 51.516 82.9 70.016 70.6 76.516C65.8 79.016 60.7 79.916 55.4 80.016C37.2 80.116 19.1 80.016 0.899994 80.016C0.699994 80.016 0.4 79.916 0 79.916V2.616C0 2.316 0.199994 2.116 0.399994 2.116C0.799994 2.016 1.19999 2.016 1.59999 2.016C19 2.016 36.4 1.916 53.8 2.216C60.7 2.316 67.2 4.316 72.7 8.916C80.2 15.116 82.2 31.916 71 39.016C70.5 39.316 69.9 39.816 69.1 40.416ZM34.5 46.116V62.916C34.5 62.916 34.5 63.016 34.6 63.016C38.8 62.616 43.3 63.516 45.7 58.916C47 56.416 47 53.316 45.8 50.716C43.5 45.516 39 46.016 34.5 46.116C34.5 46.016 34.5 46.016 34.5 46.116ZM34.5 32.716C34.5 32.816 34.5 32.816 34.5 32.716C38.4 32.616 42.4 33.216 44.7 29.416C46.4 26.616 46.4 23.416 44.5 20.716C42.1 17.316 38.3 17.716 34.6 17.616C34.6 17.616 34.5 17.616 34.5 17.716V32.716Z" />
      </svg>
      <svg class="letter letter-u2" viewBox="0 0 82 82" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.025 2H33.725C35.325 2 36.625 3.3 36.625 4.9C36.625 16.1 36.625 27.2 36.625 38.4C36.625 40.5 36.825 42.6 37.525 44.5C37.925 45.6 39.525 46.6 40.825 46.9C42.425 47.2 44.025 46.4 44.425 44.5C44.825 42.6 45.225 40.6 45.225 38.6C45.325 27.3 45.225 15.9 45.225 4.6C45.225 3.2 46.325 2.1 47.725 2.1H77.925C79.025 2.1 79.825 3 79.825 4C79.825 16.2 79.925 28.5 79.825 40.7C79.725 47.7 78.725 54.7 76.025 61.2C71.925 71 64.725 77.3 54.325 79.7C45.725 81.6 37.125 81.9 28.525 79.8C14.725 76.4 6.425 67.4 3.625 53.6C2.725 49 2.225 44.2 2.125 39.5C1.925 28 2.025 16.5 2.025 5C2.025 3.4 3.325 2 5.025 2Z" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo.letters {
  color: var(--color-tubu);

  .observer {
    position: absolute;
    top: calc(100vh + (var(--logo-width)*3));
    left: 0;
    bottom: 0;
    height: 100%;
  }

  .letter {
    width: var(--logo-width);
    margin: 1rem;
    position: fixed;
    z-index: 900;
    opacity: 0;

    &-t {
      top: 0;
      left: 0;
      transform: translate(-100%, 0);
      animation: enterT .6s ease-in forwards;
      animation-delay: .2s;
    }
    &-u {
      top: 0;
      right: 0;
      transform: translate(0, -100%);
      animation: enterU .6s ease-in forwards;
      animation-delay: .4s;
    }
    &-b {
      bottom: 0;
      left: 0;
      transform: translate(0, 100%);
      animation: enterB .6s ease-in forwards;
      animation-delay: .6s;
    }
    &-u2 {
      bottom: 0;
      right: 0;
      transform: translate(100%, 0);
      animation: enterU2 .6s ease-in forwards;
      animation-delay: .8s;
    }
  }
}
@keyframes enterT {
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes enterU {
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes enterB {
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes enterU2 {
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
