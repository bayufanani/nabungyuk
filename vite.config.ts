import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/nabungyuk/",
    plugins: [
        vue(),
        VueDevTools(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: {
                globPatterns: ["**/*"],
            },
            includeAssets: ["**/*"],
            manifest: {
                name: "NabungYuk",
                short_name: "NabungYuk",
                description: "Gimana apa sih ini? wkwkw",
                theme_color: "#f3f3f3",
                lang: "id",
                icons: [
                    {
                        src: "logo_icon192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any",
                    },
                    {
                        src: "logo_icon512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any",
                    },
                ],
                display: "standalone",
                display_override: ["window-controls-overlay"],
                shortcuts: [
                    {
                        name: "Pengeluaran",
                        url: "/nabungyuk/#/pengeluaran",
                        icons: [
                            {
                                src: "icon_pengeluaran.png",
                                sizes: "96x96",
                                type: "image/png",
                                purpose: "any",
                            },
                        ],
                    },
                    {
                        name: "Pemasukan",
                        url: "/nabungyuk/#/pemasukan",
                        icons: [
                            {
                                src: "icon_pemasukan.png",
                                sizes: "96x96",
                                type: "image/png",
                                purpose: "any",
                            },
                        ],
                    },
                    {
                        name: "Pemindahan",
                        url: "/nabungyuk/#/rekening",
                        icons: [
                            {
                                src: "icon_pemindahan.png",
                                sizes: "96x96",
                                type: "image/png",
                                purpose: "any",
                            },
                        ],
                    },
                ],
                screenshots: [
                    {
                        src: "screenshot_wide.png",
                        sizes: "1180x820",
                        type: "image/png",
                        form_factor: "wide",
                    },
                    {
                        src: "screenshot_potrait.png",
                        sizes: "414x896",
                        type: "image/png",
                        form_factor: "narrow",
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
