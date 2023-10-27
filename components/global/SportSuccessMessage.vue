<script lang="ts" setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class = "error-container">
    {{message}}
  </div>
</template>

<style scoped>
  .error-container{
    padding: 1rem 2rem;
    border-radius: 1rem;
    background: var(--color-royal-blue);
    width: 100%;
    max-width: 100%;
    margin: 0 auto 2rem auto;
    color: var(--color-white);
    line-height: 1;
    font-size: 1.5rem;
    font-weight: 500;
  }
</style>
