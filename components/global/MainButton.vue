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

</style>
