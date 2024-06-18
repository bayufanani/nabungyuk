<script setup lang="ts">
import HeaderRekap from "@/commons/components/headerRekap.vue";
</script>
<template>
    <HeaderRekap />
    <div class="content">
        <h1 v-for="i in 50" class="my-8">rekap</h1>
    </div>
</template>
<style lang="postcss" scoped>
.content {
    @apply pb-28 pt-16;
}
h1 {
    @apply bg-amber-300;
}
</style>
