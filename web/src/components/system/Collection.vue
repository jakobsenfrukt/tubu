<template>
  <div class="system">
    <section>
      Design system
      <h2>Headings</h2>
      <h1>Heading level 1 <span class="marker">h1</span></h1>
      <h2>Heading level 2 <span class="marker">h2</span></h2>
      <h3>Heading level 3 <span class="marker">h3</span></h3>
      <h4>Heading level 4 <span class="marker">h4</span></h4>
      <h5>Heading level 5 <span class="marker">h5</span></h5>
      <h6>Heading level 6 <span class="marker">h6</span></h6>
      <p class="lead">This is the <strong>lead text style</strong>. Lorem ipsum dolor sit amet, <em>consectetur adipiscing</em> elit. Donec porttitor commodo tellus, ac porta neque mollis et. Fusce iaculis varius dolor, et vulputate tortor dignissim vel.</p>
      <p>This is the paragraph style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor commodo tellus, ac porta neque mollis et. Fusce iaculis varius dolor, et vulputate tortor dignissim vel.</p>
      <blockquote>This is the quote style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor commodo tellus, ac porta neque mollis et.</blockquote>
    </section>
    <section>
      <h2>Logo &amp; color palette</h2>
      <div class="logos">
        <Logo />
        <Totem />
        <Wave />
      </div>
      <ColorPalette />
    </section>
    <section>
      <h2>Links, buttons &amp; inputs</h2>
      <p>A text with <a href="#">a link</a> in it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor commodo tellus, ac porta neque mollis et.</p>
      <a href="#">A standard link</a>
      <button class="button">A real button</button>
      <a href="#" class="button">A fake button</a>
      <label for="textinput">
        <span>A text input</span>
        <input type="text" name="textinput" id="textinput" class="text-input" placeholder="Your text here" />
      </label>
      <input type="submit" name="submitinput" id="submitinput" class="button" value="Submit" />
      <div class="input-with-submit">
        <label for="textinput">
          <span>A text input</span>
        </label>
        <div class="input-wrapper">
          <input type="text" name="textinput" id="textinput" class="text-input" placeholder="Your e-mail address" />
          <input type="submit" name="submitinput" id="submitinput" class="button" value="Sign up" />
        </div>
      </div>
      <h3>Share your story <span class="marker">(A text area)</span></h3>
      <textarea></textarea>
    </section>
    <section>
      <h2>Labels &amp; misc</h2>
      <div class="shop-labels">
        <div class="label label-soldout">Sold out</div>
        <div class="label label-sale">Sale</div>
        <div class="label label-new">New</div>
      </div>
      <div class="magazine-labels">
        <div class="label label-magazine label-category1">Mom heroes</div>
        <div class="label label-magazine label-category2">The Weekly Q</div>
        <div class="label label-magazine label-recommended">Recommended reading</div>
      </div>
      <h1 class="logo-heading">
        Readings
        <Wave class="logo" />
      </h1>
      <h1 class="logo-heading" style="color: var(--color-rose)">
        Newsletter
        <Wave class="logo" />
      </h1>
      <h1 class="logo-heading" style="color: var(--color-peach)">
        Bellytech
        <Wave class="logo" />
      </h1>
    </section>
    <section>
      <div class="circles">
        <div class="graphic">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          </svg>
        </div>
        <div class="circle spring">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="58.6387" cy="58.6387" r="58.6387" fill="#F19696" fill-opacity="0.5"/>
          </svg>
          <span>Spring</span>
        </div>
        <div class="circle summer">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="141.361" cy="58.6387" r="58.6387" fill="#200AF2" fill-opacity="0.5"/>
          </svg>
          <span>Summer</span>
        </div>
        <div class="circle fall">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="58.6387" cy="141.361" r="58.6387" fill="#A1A0C8" fill-opacity="0.5"/>
          </svg>
          <span>Fall</span>
        </div>
        <div class="circle winter">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="141.361" cy="141.361" r="58.6387" fill="#6D8873" fill-opacity="0.5"/>
          </svg>
          <span>Winter</span>
        </div>
      </div>
    </section>
    <section>
      <h2>Newsletter template</h2>
      <div class="newsletter-template">
        <div class="newsletter-header"><Logo /></div>
        <p style="font-weight: bold; font-size: 24px; line-height: 1.4;">Ok, so let me tell you a story.<br/>This is the beginning.</p>
        <p>I learned to sew on my grandmother’s old Singer sewing machine.</p>
        <p>It was from the 50’s and was so heavy that I needed help (as I was about nine) with carrying it up on our wooden living room table. I was also afraid of it, both of the electric pedal and the whirring engine, and so terrified of piercing my fingers with the jabbing needle. So at first, I only used the hand wheel, meticulously and laboriously sewing together bits of material that my mom supplied from her sewing chest — sturdy canvas cotton, slips of silk and crisp linens. But eventually, I braved the electric pedal, and old worn-down bed sheets (with cartoon patterns) became small tote bags or skirts — and my interest in design blossomed. Learning how to construct garments, to mold a silhouette and shape — and turn a flat 2D fabric into 3D, just by using small stitches with a thin needle, was beyond anything I had experienced thus far.</p>
        <p>There have always been predominantly women in my life. Having a somewhat tumultuous childhood, I was a dance and theatre kid, raised by a single mother (a former professional ballet dancer who used to dance in the Opera) and spent a lot of time with my older sister, mimicking her every move (when she opted for oversized neon athletic gear and snowboard apparel, I — of course — did the same) — or at my grandparents house, watching my grandmother as she carefully got dressed with colorful silk scarves and small pieces of jewelry. And I learned that «femininity» (and «masculinity») in dress is many — very different — things.</p>
        <p style="font-weight: bold; font-style: italic; font-size: 24px; opacity: .8; color: #5858E0; line-height: 1.4; margin: 28px 0;">To me, memories are engrained in a few specific items of clothing, and my wardrobe is a closet of stories.</p>
        <p>My mother was the one who inspired and encouraged my sewing. For a carnival costume my mom once sewed my sister an incredible red toadstool hat with white white felt spots, which I got to wear a few years later for a carnival on ice (wtf). I have honestly never felt more excited about an outfit — to this date.</p>
        <p>I was an exceptionally scrawny and short kid when I was little. I also hit puberty late (shocker) and my sister helped me dress in baggy jeans and skater hoodies, made me a cool email account (tiny_b_girl@yahoo.com) and played me Lauryn Hill. She taught me to snowboard, and mastering quick speed and pace in the snow made me confident in my body, in spite of its boob-less appearance. A few years later, when I had blossomed a little (yay!) my mom helped me sew a version of a Calvin Klein dress worn by Natalia Vodianova that I had cut out from Vogue, with billowing, shimmery fabric.</p>
        <p>Combined with studying and working with design, I’ve always been writing. To me, these two things are intrinsically linked. And I knew that if I ever were to create something, it needed to be an amalgamation of these two creative outlets of mine.</p>
        <p style="font-weight: bold; font-size: 16px;">At the heart of this project is the love for text and textiles — in sum, storytelling. From the absolute bottom of my heart, thank you for signing up for this newsletter.</p>
        <p style="font-weight: bold; font-size: 16px;">More to come, very soon.</p>
        <p class="signature"  style="font-weight: bold; font-style: italic; font-size: 16px; opacity: .8; color: #5858E0;">Thea<br/>Founder of TUBU.systems</p>
      </div>
      <div class="newsletter-template">
        <div class="newsletter-header" style="background: #5858E0; margin: -28px -28px 24px -28px; padding: 20px 28px 20px;">
          <svg viewBox="0 0 336 81" fill="var(--color-peach)" xmlns="http://www.w3.org/2000/svg" style="width: 200px; margin: 0 auto; display: block;">
            <path d="M83.7 0H112.4C114 0 115.3 1.3 115.3 2.9C115.3 14.1 115.3 25.2 115.3 36.4C115.3 38.5 115.5 40.6 116.2 42.5C116.6 43.6 118.2 44.6 119.5 44.9C121.1 45.2 122.7 44.4 123.1 42.5C123.5 40.6 123.9 38.6 123.9 36.6C124 25.3 123.9 13.9 123.9 2.6C123.9 1.2 125 0.0999985 126.4 0.0999985H156.6C157.7 0.0999985 158.5 1 158.5 2C158.5 14.2 158.6 26.5 158.5 38.7C158.4 45.7 157.4 52.7 154.7 59.2C150.6 69 143.4 75.3 133 77.7C124.4 79.6 115.8 79.9 107.2 77.8C93.4 74.4 85.1 65.4 82.3 51.6C81.4 47 80.9 42.2 80.8 37.5C80.6 26 80.7 14.5 80.7 3C80.7 1.4 82 0 83.7 0Z"/>
            <path d="M12.1 34.5H5.1C2.3 34.5 0 32.2 0 29.4V5.40002C0 2.60002 2.3 0.300018 5.1 0.300018H63.9C66.7 0.300018 69 2.60002 69 5.40002V29.4C69 32.2 66.7 34.5 63.9 34.5H57C54.2 34.5 51.9 36.8 51.9 39.6V72.7C51.9 75.5 49.6 77.8 46.8 77.8H22.4C19.6 77.8 17.3 75.5 17.3 72.7V39.6C17.2 36.8 14.9 34.5 12.1 34.5Z"/>
            <path d="M260.3 0.799988H290.8C291.9 0.799988 292.8 1.59998 292.8 2.69998C292.8 2.99998 292.8 3.29998 292.8 3.69998C292.8 14.9 292.8 26 292.8 37.2C292.8 39.3 293 41.4 293.7 43.3C294.1 44.4 295.7 45.4 297 45.7C298.6 46 300.2 45.2 300.6 43.3C301 41.4 301.4 39.4 301.4 37.4C301.5 26.1 301.4 14.7 301.4 3.39999V2.99998C301.4 1.89998 302.3 0.999985 303.4 0.999985H334C335.1 0.999985 335.9 1.89999 335.9 2.89999C335.9 15.1 336 27.4 335.9 39.6C335.8 46.6 334.8 53.6 332.1 60.1C328 69.9 320.8 76.2 310.4 78.6C301.8 80.5 293.2 80.8 284.6 78.7C270.8 75.3 262.5 66.3 259.7 52.5C258.8 47.9 258.3 43.1 258.2 38.4C258 26.9 258.1 15.4 258.1 3.89999V2.89999C258.3 1.69999 259.2 0.799988 260.3 0.799988Z"/>
            <path d="M238.9 39.1V39.2C240.5 40.3 241.9 41.2 243.3 42.2C255 50.2 252.7 68.7 240.4 75.2C235.6 77.7 230.5 78.6 225.2 78.7C207 78.8 188.9 78.7 170.7 78.7C170.5 78.7 170.2 78.6 169.8 78.6V1.29999C169.8 0.999995 170 0.799995 170.2 0.799995C170.6 0.699995 171 0.699989 171.4 0.699989C188.8 0.699989 206.2 0.599993 223.6 0.899993C230.5 0.999993 237 2.99999 242.5 7.59999C250 13.8 252 30.6 240.8 37.7C240.3 38 239.7 38.5 238.9 39.1ZM204.3 44.8V61.6C204.3 61.6 204.3 61.7 204.4 61.7C208.6 61.3 213.1 62.2 215.5 57.6C216.8 55.1 216.8 52 215.6 49.4C213.3 44.2 208.8 44.7 204.3 44.8C204.3 44.7 204.3 44.7 204.3 44.8ZM204.3 31.4C204.3 31.5 204.3 31.5 204.3 31.4C208.2 31.3 212.2 31.9 214.5 28.1C216.2 25.3 216.2 22.1 214.3 19.4C211.9 16 208.1 16.4 204.4 16.3C204.4 16.3 204.3 16.3 204.3 16.4V31.4Z"/>
          </svg>
        </div>
        <img src="/assets/images/testing/nike.png" alt="Alternative text" style="height: 400px; width: 100%; object-fit: cover; margin-bottom: 20px;" />
        <p style="font-weight: bold; font-size: 24px; line-height: 1.4;">Ok, so let me tell you a story.<br/>This is the beginning.</p>
        <p>I learned to sew on my grandmother’s old Singer sewing machine.</p>
        <p>It was from the 50’s and was so heavy that I needed help (as I was about nine) with carrying it up on our wooden living room table. I was also afraid of it, both of the electric pedal and the whirring engine, and so terrified of piercing my fingers with the jabbing needle. So at first, I only used the hand wheel, meticulously and laboriously sewing together bits of material that my mom supplied from her sewing chest — sturdy canvas cotton, slips of silk and crisp linens. But eventually, I braved the electric pedal, and old worn-down bed sheets (with cartoon patterns) became small tote bags or skirts — and my interest in design blossomed. Learning how to construct garments, to mold a silhouette and shape — and turn a flat 2D fabric into 3D, just by using small stitches with a thin needle, was beyond anything I had experienced thus far.</p>
        <p>There have always been predominantly women in my life. Having a somewhat tumultuous childhood, I was a dance and theatre kid, raised by a single mother (a former professional ballet dancer who used to dance in the Opera) and spent a lot of time with my older sister, mimicking her every move (when she opted for oversized neon athletic gear and snowboard apparel, I — of course — did the same) — or at my grandparents house, watching my grandmother as she carefully got dressed with colorful silk scarves and small pieces of jewelry. And I learned that «femininity» (and «masculinity») in dress is many — very different — things.</p>
        <p style="font-weight: bold; font-style: italic; font-size: 28px; color: #5858E0; line-height: 1.4; margin: 28px 0;padding-right: 10px;">To me, memories are engrained in a few specific items of clothing, and my wardrobe is a closet of stories.</p>
        <p>My mother was the one who inspired and encouraged my sewing. For a carnival costume my mom once sewed my sister an incredible red toadstool hat with white white felt spots, which I got to wear a few years later for a carnival on ice (wtf). I have honestly never felt more excited about an outfit — to this date.</p>
        <p>I was an exceptionally scrawny and short kid when I was little. I also hit puberty late (shocker) and my sister helped me dress in baggy jeans and skater hoodies, made me a cool email account (tiny_b_girl@yahoo.com) and played me Lauryn Hill. She taught me to snowboard, and mastering quick speed and pace in the snow made me confident in my body, in spite of its boob-less appearance. A few years later, when I had blossomed a little (yay!) my mom helped me sew a version of a Calvin Klein dress worn by Natalia Vodianova that I had cut out from Vogue, with billowing, shimmery fabric.</p>
        <p>Combined with studying and working with design, I’ve always been writing. To me, these two things are intrinsically linked. And I knew that if I ever were to create something, it needed to be an amalgamation of these two creative outlets of mine.</p>
        <p style="font-weight: bold; font-size: 16px;">At the heart of this project is the love for text and textiles — in sum, storytelling. From the absolute bottom of my heart, thank you for signing up for this newsletter.</p>
        <p style="font-weight: bold; font-size: 16px;">More to come, very soon.</p>
        <p class="signature"  style="font-weight: bold; font-style: italic; font-size: 16px; color: #5858E0;">💜 Thea<br/>Founder of TUBU.systems</p>
      </div>
      <div class="newsletter-template">
        <div class="newsletter-header" style="background: #5858E0; margin: -28px -28px 24px -28px; padding: 20px 28px 20px;">
          <h1 class="logo-heading" style="color: var(--color-peach); font-size: 100px; font-family: var(--font-tightblack); margin-top: 20px;">
            Letter
            <Wave class="logo" />
          </h1>
        </div>
        <img src="/assets/images/testing/nike.png" alt="Alternative text" style="height: 400px; width: 100%; object-fit: cover; margin-bottom: 20px; margin-top: -110px;" />
        <p style="font-weight: bold; font-size: 24px; line-height: 1.4;">Ok, so let me tell you a story.<br/>This is the beginning.</p>
        <p>I learned to sew on my grandmother’s old Singer sewing machine.</p>
        <p>It was from the 50’s and was so heavy that I needed help (as I was about nine) with carrying it up on our wooden living room table. I was also afraid of it, both of the electric pedal and the whirring engine, and so terrified of piercing my fingers with the jabbing needle. So at first, I only used the hand wheel, meticulously and laboriously sewing together bits of material that my mom supplied from her sewing chest — sturdy canvas cotton, slips of silk and crisp linens. But eventually, I braved the electric pedal, and old worn-down bed sheets (with cartoon patterns) became small tote bags or skirts — and my interest in design blossomed. Learning how to construct garments, to mold a silhouette and shape — and turn a flat 2D fabric into 3D, just by using small stitches with a thin needle, was beyond anything I had experienced thus far.</p>
        <p>There have always been predominantly women in my life. Having a somewhat tumultuous childhood, I was a dance and theatre kid, raised by a single mother (a former professional ballet dancer who used to dance in the Opera) and spent a lot of time with my older sister, mimicking her every move (when she opted for oversized neon athletic gear and snowboard apparel, I — of course — did the same) — or at my grandparents house, watching my grandmother as she carefully got dressed with colorful silk scarves and small pieces of jewelry. And I learned that «femininity» (and «masculinity») in dress is many — very different — things.</p>
        <p style="font-weight: bold; font-style: italic; font-size: 28px; color: #5858E0; line-height: 1.4; margin: 28px 0; padding-right: 10px;">To me, memories are engrained in a few specific items of clothing, and my wardrobe is a closet of stories.</p>
        <p>My mother was the one who inspired and encouraged my sewing. For a carnival costume my mom once sewed my sister an incredible red toadstool hat with white white felt spots, which I got to wear a few years later for a carnival on ice (wtf). I have honestly never felt more excited about an outfit — to this date.</p>
        <p>I was an exceptionally scrawny and short kid when I was little. I also hit puberty late (shocker) and my sister helped me dress in baggy jeans and skater hoodies, made me a cool email account (tiny_b_girl@yahoo.com) and played me Lauryn Hill. She taught me to snowboard, and mastering quick speed and pace in the snow made me confident in my body, in spite of its boob-less appearance. A few years later, when I had blossomed a little (yay!) my mom helped me sew a version of a Calvin Klein dress worn by Natalia Vodianova that I had cut out from Vogue, with billowing, shimmery fabric.</p>
        <p>Combined with studying and working with design, I’ve always been writing. To me, these two things are intrinsically linked. And I knew that if I ever were to create something, it needed to be an amalgamation of these two creative outlets of mine.</p>
        <p style="font-weight: bold; font-size: 16px;">At the heart of this project is the love for text and textiles — in sum, storytelling. From the absolute bottom of my heart, thank you for signing up for this newsletter.</p>
        <p style="font-weight: bold; font-size: 16px;">More to come, very soon.</p>
        <p class="signature"  style="font-weight: bold; font-style: italic; font-size: 16px; color: #5858E0; text-align: center; margin-bottom: 42px;">💜<br/><br/>Thea<br/>Founder of TUBU.systems</p>
        <div class="footer" style="background: #5858E0; margin: 24px -28px -28px -28px; padding: 28px 28px 20px; color: white;">
          <p>Disclaimers go here<br>
          <a href="#" style="text-decoration: underline">Unsubscribe</a></p>
        </div>
      </div>
      <h1 class="logo-heading">
        Newsletter
        <Wave class="logo" />
      </h1>
      <p class="lead">Sign up to receive bi-weekly inspiration and reading material from TUBU!</p>
      <h2 style="color: var(--color-peach)">Launching summer 2021</h2>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/system/Logo'
import Totem from '~/components/system/Totem'
import Wave from '~/components/system/Wave'
import ColorPalette from '~/components/system/ColorPalette'

export default {
  components: {
    Logo,
    Totem,
    Wave,
    ColorPalette
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 5rem auto;
  max-width: 90%;
  padding-bottom: 5rem;
  position: relative;

  &:after {
    content: " ";
    height: 5px;
    width: 100%;
    display: block;
    background: var(--color-tubu-light);
    border-radius: 10px;
    position: absolute;
    bottom: 0;
  }
}
.marker {
  font-size: 1rem;
  font-family: var(--font-sans);
  vertical-align: top;
}
.newsletter-template {
  max-width: 600px;
  margin: 1rem auto;
  border: 3px solid var(--color-tubu);
  border-radius: .5rem;
  padding: 28px;

  h1, h2 {
    font-size: 40px;
    font-family: arial;
    font-weight: 700;
  }
  p {
    font-family: arial;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .newsletter-header {
    margin-bottom: 20px;
  }
}
.logos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin: 2rem 0;
}
.label {
  display: inline-block;
  background: var(--color-tubu);
  padding: .2rem .6rem;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  transform: rotate(7deg);
  margin-right: 2rem;

  &-soldout {
    background: var(--color-rose);
    color: var(--color-white);
  }
  &-sale {
    background: var(--color-sun);
  }
  &-new {
    background: var(--color-lime);
  }

  &-magazine {
    transform: none;
  }
  &-category1 {
    background: var(--color-rose-light);
  }
  &-category2 {
    background: var(--color-sun-light);
  }
  &-recommended {
    background: var(--color-lime-light);
  }
}
.shop-labels, .magazine-labels {
  margin-bottom: 2rem;
}
.logo-heading {
  position: relative;
  text-align: center;
  margin: 5rem 0;
  color: var(--color-tubu);
  .logo {
    position: absolute;
    top: -50%;
    left: 30%;
    width: 10%;
    color: var(--color-lime);
  }
}
.circles {
  position: relative;
  max-width: 200px;
}
.circle {
  text-align: center;
  cursor: pointer;
  transition: opacity .3s ease-in-out;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    opacity: .5;
  }

  span {
    display: block;
    background: #eee;
    margin: 1rem 0;
  }
}
</style>
