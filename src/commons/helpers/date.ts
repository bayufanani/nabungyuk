export function dateFormat(date: Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dayWeek = date.getDay();

    let hari = "";
    let bulan = "";

    switch (dayWeek) {
        case 0:
            hari = "Minggu";
            break;
        case 1:
            hari = "Senin";
            break;
        case 2:
            hari = "Selasa";
            break;
        case 3:
            hari = "Rabu";
            break;
        case 4:
            hari = "Kamis";
            break;
        case 5:
            hari = "Jum'at";
            break;
        case 6:
            hari = "Sabtu";
            break;
    }
    switch (month) {
        case 0:
            bulan = "Januari";
            break;
        case 1:
            bulan = "Februari";
            break;
        case 2:
            bulan = "Maret";
            break;
        case 3:
            bulan = "April";
            break;
        case 4:
            bulan = "Mei";
            break;
        case 5:
            bulan = "Juni";
            break;
        case 6:
            bulan = "Juli";
            break;
        case 7:
            bulan = "Agustus";
            break;
        case 8:
            bulan = "September";
            break;
        case 9:
            bulan = "Oktober";
            break;
        case 10:
            bulan = "November";
            break;
        case 11:
            bulan = "Desember";
            break;
    }

    return `${hari}, ${day} ${bulan} ${year}`;
}
