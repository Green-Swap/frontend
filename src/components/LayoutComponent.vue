<style>
  @import "../assets/scss/layout.scss";
</style>

<template>
  <main>
    <section>
      <aside>
        <img :src="require('../assets/images/layoutImg.svg')" alt="photo de plantes dans un salon">
      </aside>
      <article>
        <div>
          <h1>Beyond <br> Nature</h1>
          <p>Envie d’en savoir plus sur Little Garden ? Découvre notre histoire.</p>
          <button>SHOP NOW</button>
        </div>
        <div>
          <div>
            <button>
              <img :src="require('../assets/images/ctrl-left.svg')" alt="flèche directionnel vers la gauche">
            </button>
            <button>
              <img :src="require('../assets/images/ctrl-right.svg')" alt="flèche directionnel vers la droite">
            </button>
          </div>
          <div>
            <h3>the new lookbook</h3>
            <p>Daily Inspiration and Beauty Advices.</p>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>
