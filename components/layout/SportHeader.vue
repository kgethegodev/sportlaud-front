<script lang="ts" setup>
// @TODO Add module using Pinia to handle all cart functionality
// @TODO Use NuxtImage for the logo
</script>

<template>
  <div class="header-container">
    <div class="container">
      <NuxtLink to="/">
        <img
          src="/images/sport-laud-logo-white.png"
          class="header-logo"
          alt="Sport Laud Logo"
        />
      <!--        <NuxtImg src="/images/sport-laud-logo.png" class="header-logo" alt="Sport Laud Logo" />-->
      </NuxtLink>
      <div class="cart-btn-block">
        <NuxtLink to="/" class="cart-btn">
          <Icon name="mdi:cart" color="white" class="cart-icon"/>
          <span class = "cart-btn-item-count">(0)</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.header-container{
  background: var(--color-grey-dark);
  width: 100%;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 1;

  .container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .header-logo{
      max-width: 10rem;
    }

    .cart-btn-block{
      position: relative;
      padding: 1rem;

      .cart-btn-item-count{
          position: absolute;
          top: 0 ;
          right: 0;
          text-decoration: none;
          color: var(--color-white);
          font-size: 1rem;
       }

    }
  }
}
</style>
