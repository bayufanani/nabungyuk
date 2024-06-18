<script setup lang="ts">
import Transaksicon from "./icons/transaksi.vue";
import RekeningIcon from "./icons/rekening.vue";
import RekapIcon from "./icons/rekap.vue";
import AboutIcon from "./icons/about.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const listMenu = [
    {
        id: "transaksi",
        name: "Transaksi",
        icon: Transaksicon,
        url_name: "transaksi",
    },
    {
        id: "rekening",
        name: "Rekening",
        icon: RekeningIcon,
        url_name: "rekening",
    },
    {
        id: "rekap",
        name: "Rekap",
        icon: RekapIcon,
        url_name: "rekap",
    },
    {
        id: "about",
        name: "About",
        icon: AboutIcon,
        url_name: "about",
    },
];
</script>
<template>
    <div class="bottom-nav">
        <RouterLink
            :to="{ name: item.url_name }"
            v-for="item in listMenu"
            replace
        >
            <div
                class="bottom-nav-item"
                :class="{ active: route.name === item.id }"
            >
                <span class="icon">
                    <component :is="item.icon" class="size-8 mx-auto" />
                </span>
                <span>{{ item.name }}</span>
            </div>
        </RouterLink>
    </div>
</template>

<style scoped lang="postcss">
.bottom-nav {
    @apply my-8 fixed bottom-0 left-4 right-4 flex flex-row rounded-full px-8 py-2 justify-between shadow-lg backdrop-blur bg-whitish;
}

.bottom-nav-item {
    @apply flex flex-col w-20 justify-center text-center text-gray-400;
}
.bottom-nav-item > .icon > svg {
    @apply opacity-50;
}
.bottom-nav-item.active {
    @apply text-black;
}
.bottom-nav-item.active > .icon {
    @apply bg-yellow-400 rounded-full;
}
.bottom-nav-item.active > .icon > svg {
    @apply opacity-100;
}
</style>
