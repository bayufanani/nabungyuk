<script setup lang="ts">
import { dateFormat } from "@/commons/helpers/date";
import { computed, onMounted, ref, watch } from "vue";
import { transaksiStore } from "@/main/stores/transaksi";

const store = transaksiStore();
store.tgl = new Date();
const dateString = computed(() => dateFormat(store.tgl));

watch(
    () => store.tgl,
    (newValue) => {
        refreshTransaksi();
    }
);

function next() {
    store.tgl = new Date(store.tgl.setDate(store.tgl.getDate() + 1));
}

function prev() {
    store.tgl = new Date(store.tgl.setDate(store.tgl.getDate() - 1));
}

function refreshTransaksi() {
    const currentDateHTML = store.tgl.toISOString().substring(0, 10);
    store.get(currentDateHTML, currentDateHTML);
}

onMounted(() => {
    refreshTransaksi();
});
</script>

<template>
    <div class="header app-titlebar">
        <h1 class="flex flex-row text-2xl font-bold mt-4">
            <img src="/logo_icon.svg" alt="" class="w-8 me-2" />
            <p>NabungYuk</p>
        </h1>
        <div class="w-full flex flex-row justify-around text-lg mt-4">
            <button class="tgl-button" @click="prev">&lt;</button>
            <p>{{ dateString }}</p>
            <button class="tgl-button" @click="next">&gt;</button>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.tgl-button {
    @apply size-8 bg-yellow-100 rounded-lg;
}
.header {
    @apply flex flex-col px-4 fixed top-0 left-0 right-0 backdrop-blur shadow-lg bg-whitish z-10 h-28;
}
</style>
