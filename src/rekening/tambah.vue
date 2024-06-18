<script setup lang="ts">
import Header from "@/commons/components/header.vue";
import { useRouter } from "vue-router";
import { backToMainOrBack } from "@/commons/helpers/backButton";
import InputText from "@/commons/components/inputText.vue";
import InputNumber from "@/commons/components/inputNumber.vue";
import ButtonPrimary from "@/commons/components/buttonPrimary.vue";
import { rekeningStore } from "@/main/stores/rekening";
import { ref } from "vue";

const router = useRouter();
const namaRekening = ref("");
const isiRekening = ref("");
const store = rekeningStore();

async function save() {
    await store.save(namaRekening.value, parseInt(isiRekening.value, 10));
    backToMainOrBack(router, "rekening");
}
</script>
<template>
    <Header
        title="Tambah Rekening"
        :has-back-button="true"
        @back-click="backToMainOrBack(router, 'rekening')"
    />
    <div class="content">
        <form action="" @submit.prevent="save">
            <InputText placeholder="Nama Rekening" v-model="namaRekening" />
            <InputNumber placeholder="Isi Rekening" v-model="isiRekening" />
            <ButtonPrimary label="Simpan" type="submit" />
        </form>
    </div>
</template>

<style scoped lang="postcss">
.content {
    @apply pt-16 px-4;
}
</style>
