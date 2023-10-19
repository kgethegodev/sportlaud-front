<script lang="ts" setup>
const props = defineProps(
  {
    text: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
    }
  }
)
</script>

<template>
  <NuxtLink :to="href" :disabled="disabled" class="main-button">{{text}}</NuxtLink>
</template>

<style scoped>
.main-button{
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: var(--color-crimson-red);
  color: var(--color-white);
  display: inline-block;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover{
    background: var(--color-white);
    color: var(--color-crimson-red);
  }
}
</style>
