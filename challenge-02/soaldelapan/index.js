// return totalkeuntungan => format rupiah
// return totalModal => format rupiah
// return persentaseKeuntungan => laba/hargaBeli * 100%
// return produkBukuTerlaris => nama buku yang paling banyak terjual
// return penulisTerlaris => nama penulis buku yang paling banyak terjual

let getInfoPenjualan = (dataPenjualan) => {
    let totalkeuntungan = 0;
    let totalmodal = 0;
    for (let i = 0; i < dataPenjualan.length; i++) {
        totalkeuntungan +=
            (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) *
            dataPenjualan[i].totalTerjual;
    }

    for (let j = 0; j < dataPenjualan.length; j++) {
        totalmodal +=
            (dataPenjualan[j].totalTerjual + dataPenjualan[j].sisaStok) *
            dataPenjualan[j].hargaBeli;
    }

    var most = 0;
    for (let k = 0; k < dataPenjualan.length; k++) {
        if (dataPenjualan[k].totalTerjual > most) {
            most = dataPenjualan[k].totalTerjual;
        }
    }
    let persentaseKeuntungan = (totalkeuntungan / totalmodal) * 100;
    let mostTerjual = 0;
    for (let m = 0; m < dataPenjualan.length; m++) {
        if (dataPenjualan[m].totalTerjual > mostTerjual) {
            mostTerjual = dataPenjualan[m].totalTerjual;
        }
    }
    // let produknya = mostTerjual.namaProduk;
    console.log(mostTerjual);

    var resultAkhir = {
        totalKeuntungan: `${totalkeuntungan}`,
        totalModal: `${totalmodal}`,
        persentaseKeuntungan: `${Math.ceil(persentaseKeuntungan)}%`,
        // produkBukuTerlaris: `${}`
    };
    console.log(resultAkhir);

    // return totalkeuntungan;
    // return totalModal;
    // return persentaseKeuntungan;
};

const dataPenjualanNovel = [{
        idProduct: "BOOK002421",
        namaProduk: "Pulang - Pergi",
        penulis: "Tere Liye",
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: "BOOK002351",
        namaProduk: "Selamat Tinggal",
        penulis: "Tere Liye",
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: "BOOK002941",
        namaProduk: "Garis Waktu",
        penulis: "Fiersa Besari",
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: "BOOK002941",
        namaProduk: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];
console.log(getInfoPenjualan(dataPenjualanNovel));