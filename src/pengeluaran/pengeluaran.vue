<script setup lang="ts">
import Header from "@/commons/components/header.vue";
import InputDate from "@/commons/components/inputDate.vue";
import InputText from "@/commons/components/inputText.vue";
import InputSelect from "@/commons/components/inputSelect.vue";
import { useRouter } from "vue-router";
import { backToMainOrBack } from "@/commons/helpers/backButton";
import { rekeningStore } from "@/main/stores/rekening";
import { computed, onMounted, ref } from "vue";
import ButtonPrimary from "@/commons/components/buttonPrimary.vue";
import { transaksiStore } from "@/main/stores/transaksi";

const router = useRouter();
const rekening = rekeningStore();
const options = computed(() =>
    rekening.data.map((item) => {
        return { value: item.id, label: item.nama };
    })
);
const rekeningId = ref("");
const date = new Date();
const tgl = ref(date.toISOString().substring(0, 10));
const jumlah = ref("");
const keterangan = ref("");
const store = transaksiStore();

onMounted(() => {
    rekening.get();
});

function savePengeluaran() {
    store.save(
        rekeningId.value,
        parseInt(jumlah.value, 10),
        keterangan.value,
        "pengeluaran"
    );
}
</script>
<template>
    <Header
        title="Pengeluaran"
        :has-back-button="true"
        @back-click="backToMainOrBack(router, 'transaksi')"
    />
    <div class="content">
        <form action="" @submit.prevent="savePengeluaran">
            <InputSelect :options="options" v-model="rekeningId" />
            <InputDate v-model="tgl" />
            <InputText placeholder="Jumlah" v-model="jumlah" />
            <InputText placeholder="Keterangan" v-model="keterangan" />
            <ButtonPrimary label="Tambah Pengeluaran" type="submit" />
        </form>
    </div>
</template>

<style scoped lang="postcss">
.content {
    @apply pt-16 px-4;
}
</style>
