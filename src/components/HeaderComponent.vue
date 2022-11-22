<template>
  <header>
    <div class="logo">
      <img :src="require('../assets/images/MASS..svg')" alt="logo" />
    </div>
    <nav class="navBar">
      <ul class="navBar-items">
        <li><p>SHOPPING</p></li>
        <li><p>MESSAGING</p></li>
        <li><p>SEARCH</p></li>
        <li><p>CART</p></li>
        <li><img :src="require('../assets/images/userLogo.svg')"/></li>
      </ul>
    </nav>
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,700&display=swap');

header {
  display: grid;
  grid-template-columns: 5% 45% 45% 5%;
  grid-template-rows: 30% 70%;
}
.logo {
  grid-column: 2 / 2;
  grid-row: 2 / 2;
}
.navBar {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}

.navBar-items {
  display: flex;
  font-family: 'Lato', sans-serif;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  height: 100%;
}

.navBar-items a {
  text-decoration: none;
  color: #000;
}
</style>
