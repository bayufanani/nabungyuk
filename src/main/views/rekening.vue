<script setup lang="ts">
import Header from "@/commons/components/header.vue";
import FloatingButton from "@/commons/components/floatingButton.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { rekeningStore } from "../stores/rekening";
import { formatRp } from "@/commons/helpers/formatUang";

const router = useRouter();
const store = rekeningStore();
function addRekening() {
    router.push({ name: "tambah-rekening" });
}
onMounted(() => {
    store.get();
});
</script>
<template>
    <Header title="Rekening" />
    <div class="content">
        <div class="py-4 flex justify-between px-4 border-b">
            <p>Total Uang</p>
            <p>{{ formatRp(store.totalRekening) }}</p>
        </div>
        <div
            v-for="item in store.data"
            class="py-4 flex justify-between px-4 border-b"
        >
            <p>{{ item.nama }}</p>
            <p>{{ formatRp(item.saldo) }}</p>
        </div>
    </div>
    <FloatingButton @click="addRekening" />
</template>
<style lang="postcss" scoped>
.content {
    @apply pt-16 pb-48;
}
</style>
