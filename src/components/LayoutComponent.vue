<style>
  @import "../assets/scss/layout.scss";
</style>

<template>
  <main>
    <section>
      <aside>
        <img :src="require('../assets/images/layoutImg.svg')" alt="photo de plantes dans un salon">
      </aside>
      <article class="first_article">
        <div>
          <h1>Beyond<br> Nature</h1>
          <p>Envie d’en savoir plus sur Little Garden ? Découvre notre histoire.</p>
          <button>SHOP NOW</button>
        </div>
      </article>
      <div class="social_network">
        <span></span>
        <p>PV</p>
        <p>AD</p>
        <p>MB</p>
        <p>CT</p>
        <p>NJ</p>
        <span></span>
      </div>
      <article class="second_article">
        <div class="left_block">
          <button>
            <img :src="require('../assets/images/ctrl-left.svg')" alt="flèche vers la gauche">
          </button>
          <button>
            <img :src="require('../assets/images/ctrl-right.svg')" alt="flèche vers la droite" />
          </button>
        </div>
        <div class="right_block">
          <div>
            <h3>THE NEW LOOKBOOK</h3>
            <p>
              Daily Inspiration and Beauty <br> Advices.
            </p>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>
