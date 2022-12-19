<style>
@import "../assets/scss/header.scss";
</style>

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