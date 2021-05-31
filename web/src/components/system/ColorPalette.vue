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
      TUBU dark<br>
      #5858E0
    </div>
    <div class="color color2-2">
      Sun dark<br>
      #F4BB47
    </div>
    <div class="color color3-2">
      Rose dark<br>
      #D9577D
    </div>
    <div class="color color4-2">
      Lime dark<br>
      #1CF44A
    </div>
    <div class="color color5-2">
      Peach dark<br>
      #F19696
    </div>
    <div class="color color1-3">
      TUBU mellow<br>
      #5858E0
    </div>
    <div class="color color2-3">
      Sun mellow<br>
      #F4BB47
    </div>
    <div class="color color3-3">
      Rose mellow<br>
      #C8B4B4
    </div>
    <div class="color color4-3">
      Lime mellow<br>
      #1CF44A
    </div>
    <div class="color color5-3">
      Peach mellow<br>
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
    background: var(--color-tubu-dark);
  }
  .color2-2 {
    background: var(--color-sun-dark);
  }
  .color3-2 {
    background: var(--color-rose-dark);
  }
  .color4-2 {
    background: var(--color-lime-dark);
  }
  .color5-2 {
    background: var(--color-peach-dark);
  }
  
  .color1-3 {
    background: var(--color-tubu-mellow);
  }
  .color2-3 {
    background: var(--color-sun-mellow);
  }
  .color3-3 {
    background: var(--color-rose-mellow);
  }
  .color4-3 {
    background: var(--color-lime-mellow);
  }
  .color5-3 {
    background: var(--color-peach-mellow);
  }
}
</style>
