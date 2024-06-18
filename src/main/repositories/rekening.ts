import { auth, db } from "@/firebase";
import {
    QueryDocumentSnapshot,
    Timestamp,
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    where,
    type SnapshotOptions,
} from "firebase/firestore";
import type { Rekening } from "../entities/rekening";

// need for typing firebase using converter
const rekeningConverter = {
    toFirestore: (rekening: Rekening) => {
        return {
            id: rekening.id,
            nama: rekening.nama,
            saldo: rekening.saldo,
            pemilik: rekening.pemilik,
            timestamp: rekening.timestamp,
        };
    },
    fromFirestore: (
        snapshot: QueryDocumentSnapshot<Rekening>,
        options: SnapshotOptions
    ) => {
        const data = snapshot.data(options);
        return {
            id: snapshot.id,
            nama: data.nama,
            saldo: data.saldo,
            pemilik: data.pemilik,
            timestamp: data.timestamp,
        };
    },
};

export function rekeningRepository() {
    async function get() {
        await auth.authStateReady();

        if (!auth.currentUser) {
            throw new Error("User not logged in");
        }

        return query(
            collection(db, "rekening"),
            where("pemilik", "==", auth.currentUser.uid)
        ).withConverter(rekeningConverter);
    }
    async function getById(id: string) {
        await auth.authStateReady();

        if (!auth.currentUser) {
            return new Error("User not logged in");
        }
        onSnapshot(doc(db, "rekening", id), (doc) => {
            return doc.data();
        });
    }
    async function create(nama: string, saldo: number) {
        await auth.authStateReady();

        if (!auth.currentUser) {
            return new Error("User not logged in");
        }
        return addDoc(collection(db, "rekening"), {
            nama: nama,
            saldo: saldo,
            pemilik: auth.currentUser.uid,
            timestamp: Timestamp.now(),
        });
    }

    async function destroy(id: string) {
        await auth.authStateReady();
        if (!auth.currentUser) {
            return new Error("User not logged in");
        }
        return deleteDoc(
            doc(db, "rekening", id, id + ".pemilik", auth.currentUser.uid)
        );
    }

    return {
        get,
        getById,
        create,
        destroy,
    };
}
