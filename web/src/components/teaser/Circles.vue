<template>
  <div class="circles">
    <div class="graphic">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      </svg>
    </div>
    <div class="circle spring">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="58.6387" cy="58.6387" r="58.6387" fill="#F19696" fill-opacity="0.5"/>
      </svg>
    </div>
    <div class="circle summer">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="141.361" cy="58.6387" r="58.6387" fill="#200AF2" fill-opacity="0.5"/>
      </svg>
    </div>
    <div class="circle fall">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="58.6387" cy="141.361" r="58.6387" fill="#A1A0C8" fill-opacity="0.5"/>
      </svg>
    </div>
    <div class="circle winter">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="141.361" cy="141.361" r="58.6387" fill="#6D8873" fill-opacity="0.5"/>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.circles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  .circle {
    text-align: center;
    transition: opacity .3s ease-in-out;

    svg {
      position: absolute;
      top: 0;
      left: 0;
    }

    span {
      display: block;
      background: #eee;
      margin: 1rem 0;
    }
  }
}
</style>