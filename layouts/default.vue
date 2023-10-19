<script lang="ts" setup>
import SportHeader from "~/components/layout/SportHeader.vue";
import SportFooter from "~/components/layout/SportFooter.vue";
</script>

<template>
    <sport-header />
    <slot />
    <sport-footer />
</template>

<style></style>
