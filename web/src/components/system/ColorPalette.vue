<template>
  <div class="color-palette">
    <div class="color color1">
      TUBU<br>
      #5858E0
    </div>
    <div class="color color2">
      Sun<br>
      #F4BB47
    </div>
    <div class="color color3">
      Rose<br>
      #D9577D
    </div>
    <div class="color color4">
      Lime<br>
      #1CF44A
    </div>
    <div class="color color5">
      Peach<br>
      #F19696
    </div>
    <div class="color color1-1">
      TUBU light<br>
      #5858E0
    </div>
    <div class="color color2-1">
      Sun light<br>
      #F4BB47
    </div>
    <div class="color color3-1">
      Rose light<br>
      #D9577D
    </div>
    <div class="color color4-1">
      Lime light<br>
      #1CF44A
    </div>
    <div class="color color5-1">
      Peach light<br>
      #F19696
    </div>
    <div class="color color1-2">
      TUBU strong<br>
      #5858E0
    </div>
    <div class="color color2-2">
      Sun strong<br>
      #F4BB47
    </div>
    <div class="color color3-2">
      Rose strong<br>
      #D9577D
    </div>
    <div class="color color4-2">
      Lime strong<br>
      #1CF44A
    </div>
    <div class="color color5-2">
      Peach strong<br>
      #F19696
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-palette {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  .color {
    padding: 4rem 2rem 2rem 2rem;
  }
  .color1 {
    background: var(--color-tubu);
  }
  .color2 {
    background: var(--color-sun);
  }
  .color3 {
    background: var(--color-rose);
  }
  .color4 {
    background: var(--color-lime);
  }
  .color5 {
    background: var(--color-peach);
  }

  .color1-1 {
    background: var(--color-tubu-light);
  }
  .color2-1 {
    background: var(--color-sun-light);
  }
  .color3-1 {
    background: var(--color-rose-light);
  }
  .color4-1 {
    background: var(--color-lime-light);
  }
  .color5-1 {
    background: var(--color-peach-light);
  }

  .color1-2 {
    background: var(--color-tubu-strong);
  }
  .color2-2 {
    background: var(--color-sun-strong);
  }
  .color3-2 {
    background: var(--color-rose-strong);
  }
  .color4-2 {
    background: var(--color-lime-strong);
  }
  .color5-2 {
    background: var(--color-peach-strong);
  }
}
</style>
