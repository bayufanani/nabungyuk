import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("../main/views/index.vue"),
            children: [
                {
                    path: "",
                    name: "transaksi",
                    component: () => import("../main/views/transaksi.vue"),
                },
                {
                    path: "rekening",
                    name: "rekening",
                    component: () => import("../main/views/rekening.vue"),
                },
                {
                    path: "rekap",
                    name: "rekap",
                    component: () => import("../main/views/rekap.vue"),
                },
                {
                    path: "about",
                    name: "about",
                    component: () => import("../main/views/about.vue"),
                },
            ],
        },
        {
            path: "/pengeluaran",
            name: "pengeluaran",
            component: () => import("../pengeluaran/pengeluaran.vue"),
        },
        {
            path: "/pemasukan",
            name: "pemasukan",
            component: () => import("../pemasukan/pemasukan.vue"),
        },
        {
            path: "/pemindahan",
            name: "pemindahan",
            component: () => import("../pemindahan/pemindahan.vue"),
        },
        {
            path: "/tambah-rekening",
            name: "tambah-rekening",
            component: () => import("../rekening/tambah.vue"),
        },
    ],
});

export default router;
