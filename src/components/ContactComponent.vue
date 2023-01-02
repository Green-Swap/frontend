<template>
  <div class="contact_container">
    <div class="bloc">
      <div class="container">
        <h2>Contact us</h2>
        <h3>Let's Talk</h3>
        <hr />
        <p>Une Courte Description</p>
        <a href="mailto:greenswap@gmail.com" class="black-button">
          <button class="black-button">Contacter nous</button>
        </a>
      </div>
    </div>
    <div class="bloc">
      <img src="../assets/images/plante_11.png" alt="contact" />
    </div>
  </div>
</template>

<style scoped>
.contact_container {
  display: flex;
  width: 100%;
  height: 100%;
}
.bloc {
  flex: 1;
}
img {
  max-width: 100%;
}
.container {
  text-align: center;
  margin: 90px;
}

h2 {
  font-size: 2em;
  font-weight: bold;
  color: #333;
}

h3 {
  font-size: 1.5em;
  font-weight: bold;
  color: #666;
  margin-bottom: 0.5em;
}

hr {
  border: 0;
  border-top: 1px solid black;
  width: 250px;
  margin: 1em auto;
}

p {
  font-size: 1em;
  color: #333;
  margin-bottom: 4em;
}

button {
  display: inline-block;
  font-size: 1em;
}
.black-button {
  display: inline-block;
  font-size: 1em;
  padding: 0.5em 1em;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}

.black-button:hover {
  background-color: #333;
  color: #fff;
}
</style>
