<script lang="ts" setup></script>

<template>
  <div class = "loader-container">
    <span class = "loader"></span>
  </div>
</template>

<style scoped lang="scss">
.loader-container{
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  z-index: 9;

  .loader{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 0.2rem;
    max-width: 30rem;
    background: var(--color-white);
    border-radius: 2rem;
    animation: ease-in-out loader 2s infinite;
  }
}

@keyframes loader {
  0%{
    width: 0;
    opacity: 1;
  }
  100%{
    width: 30rem;
    opacity: 0;
  }

}
</style>
