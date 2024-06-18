import { defineStore } from "pinia";
import { rekeningRepository } from "../repositories/rekening";
import { computed, ref } from "vue";
import type { Rekening } from "../entities/rekening";
import { onSnapshot } from "firebase/firestore";

export const rekeningStore = defineStore("rekening", () => {
    const data = ref<Rekening[]>([]);
    const totalRekening = computed(() => {
        return data.value.reduce((a, b) => a + b.saldo, 0);
    });
    async function get() {
        try {
            const query = await rekeningRepository().get();
            // for firebase
            onSnapshot(query, (querySnapshot) => {
                data.value = querySnapshot.docs.map((doc) => doc.data());
            });
        } catch (error) {
            console.error(error);
        }
    }

    function save(nama: string, saldo: number) {
        return rekeningRepository().create(nama, saldo);
    }
    return { get, save, data, totalRekening };
});
