export function formatRp(angka: number) {
    const format = angka.toLocaleString("id-ID");
    return `Rp. ${format}`;
}
