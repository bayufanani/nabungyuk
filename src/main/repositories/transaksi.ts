import { auth, db } from "@/firebase";
import {
    QueryDocumentSnapshot,
    Timestamp,
    addDoc,
    collection,
    endAt,
    orderBy,
    query,
    startAt,
    type SnapshotOptions,
} from "firebase/firestore";
import type { Transaksi } from "../entities/transaksi";

// need for typing firebase using converter
const transaksiConverter = {
    toFirestore: (transaksi: Transaksi) => {
        return {
            id: transaksi.id,
            rekeningId: transaksi.rekeningId,
            nominal: transaksi.nominal,
            keterangan: transaksi.keterangan,
            timestamp: transaksi.timestamp,
        };
    },
    fromFirestore: (
        snapshot: QueryDocumentSnapshot<Transaksi>,
        options: SnapshotOptions
    ) => {
        const data = snapshot.data(options);
        return {
            id: snapshot.id,
            rekeningId: data.rekeningId,
            nominal: data.nominal,
            keterangan: data.keterangan,
            timestamp: data.timestamp,
        };
    },
};

export function transaksiRepository() {
    if (!auth.currentUser) {
        throw new Error("User not logged in");
    }
    async function get(startDate: String, endDate: String) {
        return query(
            collection(db, "transaksi"),
            orderBy("timestamp", "desc"),
            startAt(startDate),
            endAt(endDate)
        ).withConverter(transaksiConverter);
    }
    async function create(
        rekeningId: string,
        nominal: number,
        keterangan: string,
        tipe: "pengeluaran" | "pemasukan"
    ) {
        return addDoc(collection(db, "transaksi"), {
            pemilik: auth.currentUser?.uid,
            rekeningId: rekeningId,
            nominal: nominal,
            keterangan: keterangan,
            tipe: tipe,
            timestamp: Timestamp.now(),
        });
    }
    return { get, create };
}
