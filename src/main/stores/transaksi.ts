import { computed, ref, watch } from "vue";
import type { Transaksi } from "../entities/transaksi";
import { defineStore } from "pinia";
import { transaksiRepository } from "../repositories/transaksi";
import { onSnapshot } from "firebase/firestore";

export const transaksiStore = defineStore("transaksi", () => {
    const data = ref<Transaksi[]>([]);
    const tgl = ref(new Date());
    watch(data, (newValue) => {
        console.log("new value", newValue);
    });
    const totalTransaksi = computed(() => {
        return data.value.reduce((a, b) => a + b.nominal, 0);
    });
    async function get(startDate: String, endDate: String) {
        try {
            const query = await transaksiRepository().get(startDate, endDate);
            // for firebase
            onSnapshot(query, (querySnapshot) => {
                data.value = querySnapshot.docs.map((doc) => doc.data());
            });
        } catch (error) {
            console.error(error);
        }
    }

    function save(
        rekeningId: string,
        nominal: number,
        keterangan: string,
        tipe: "pengeluaran" | "pemasukan"
    ) {
        return transaksiRepository().create(
            rekeningId,
            nominal,
            keterangan,
            tipe
        );
    }
    return { get, save, tgl, data, totalTransaksi };
});
