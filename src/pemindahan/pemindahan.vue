<script setup lang="ts">
import Header from "@/commons/components/header.vue";
import { useRouter } from "vue-router";
import { backToMainOrBack } from "@/commons/helpers/backButton";

const router = useRouter();
</script>
<template>
    <Header
        title="Pemindahan"
        :has-back-button="true"
        @back-click="backToMainOrBack(router, 'transaksi')"
    />
    <div class="content">
        <h1>pemindahan</h1>
    </div>
</template>

<style scoped lang="postcss">
.content {
    @apply pt-16;
}
</style>
