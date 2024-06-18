<script setup lang="ts">
import Header from "@/commons/components/headerTransaksi.vue";
import FloatingButton from "@/commons/components/floatingButton.vue";
import FloatingButtonChildren from "@/commons/components/floatingButtonChildren.vue";
import FloatingButtonChild from "@/commons/components/floatingButtonChild.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { transaksiStore } from "../stores/transaksi";

const isShown = ref(false);
const router = useRouter();
const floatingButtonChildrenList = [
    {
        label: "Pengeluaran",
        click: () => {
            console.log("pengeluaran");
            router.push({ name: "pengeluaran" });
            isShown.value = false;
        },
        icon: "icon_pengeluaran.png",
        class: "bg-red-200",
    },
    {
        label: "Pemasukan",
        click: () => {
            console.log("pemasukan");
            router.push({ name: "pemasukan" });
            isShown.value = false;
        },
        icon: "icon_pemasukan.png",
        class: "bg-emerald-200",
    },
    {
        label: "Pemindahan",
        click: () => {
            console.log("pemindahan");
            router.push({ name: "pemindahan" });
            isShown.value = false;
        },
        icon: "icon_pemindahan.png",
        class: "bg-sky-200",
    },
];
const store = transaksiStore();

function translation(shown: boolean, index: number) {
    if (shown) {
        return "translateY(0)";
    }
    return (
        "translateY(" + (floatingButtonChildrenList.length - index) * 100 + "%)"
    );
}
function delay(index: number) {
    return index * 40 + "ms";
}

onMounted(() => {
    const tgl = store.tgl.toISOString().substring(0, 10);
    store.get(tgl, tgl);
});
</script>
<template>
    <Header />
    <div class="content">
        <div v-for="item in store.data"></div>
    </div>
    <FloatingButtonChildren>
        <FloatingButtonChild
            v-for="(item, index) in floatingButtonChildrenList"
            :label="item.label"
            @click="item.click"
            :isShown="isShown"
            :style="{
                transform: translation(isShown, index),
                transitionDelay: delay(index),
            }"
            :icon="item.icon"
            :class="item.class"
        />
    </FloatingButtonChildren>
    <FloatingButton @click="isShown = !isShown" />
</template>
<style lang="postcss" scoped>
.content {
    @apply pt-28 pb-48;
}
</style>
