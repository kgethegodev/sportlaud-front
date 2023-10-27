<script lang="ts" setup>
</script>

<template>
  <div class="footer-container">
    <div class="container">
      <NuxtLink to="/">
        <img
          src="/images/sport-laud-logo-white.png"
          class="header-logo"
          alt="Sport Laud Logo"
        />
      <!--        <NuxtImg src="/images/sport-laud-logo.png" class="header-logo" alt="Sport Laud Logo" />-->
      </NuxtLink>

      <div class="footer-menu-container">
        <NuxtLink to="/" class="footer-menu-item">About Us</NuxtLink>
        <NuxtLink to="/" class="footer-menu-item">Help Center</NuxtLink>
        <NuxtLink to="/" class="footer-menu-item">Private Policy</NuxtLink>
        <NuxtLink to="/" class="footer-menu-item">Blog</NuxtLink>
        <NuxtLink to="/" class="footer-menu-item">Become A Partner</NuxtLink>
        <NuxtLink to="/" class="footer-menu-item">Contact</NuxtLink>
      </div>
    </div>
    <div class="container">
      <p class="sport-copyright">Copyright 2023 by Sport Laud</p>
      <div class="footer-socials-container">
        <NuxtLink to="/">
          <Icon name="arcticons:twitter-alt-2" color="white" />
        </NuxtLink>
        <NuxtLink to="/">
          <Icon name="arcticons:github" color="white" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container{
  padding: 2rem 0;
  background: var(--color-grey-dark);
  z-index: 2;
  position: relative;

  .container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    .header-logo{
      max-width: 10rem;
    }

    .sport-copyright{
      font-size: 1rem;
      color: var(--color-grey-light);
    }

    .footer-socials-container{
      display: flex;
      flex-direction: row;
      gap: 1rem;
      justify-content: space-between;
    }
  }

  .footer-menu-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;

    .footer-menu-item{
      color: var(--color-grey-light);
      font-size: 1.6rem;
      text-decoration: none;
      transition: 0.3s ease;

      &:hover{
        color: var(--color-royal-blue);
      }
    }
  }
}
</style>
