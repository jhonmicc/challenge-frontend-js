let getTotalPenjualan = (dataPenjualan) => {
    let totalPenjualan = 0;
    for (let i = 0; i < dataPenjualan.length; i++) {
        totalPenjualan = totalPenjualan + dataPenjualan[i].totalTerjual;
    }
    return totalPenjualan;
};

const dataPenjualanPakAldi = [{
        namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: "Sepatu Warrior Tristan Black Brown High",
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: "Sepatu Warrior Tristan Maroon High ",
        kategori: "Sepatu Sneaker",
        hargaSatuan: 360000,
        totalTerjual: 90,
    },
    {
        namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    },
];
console.log(getTotalPenjualan(dataPenjualanPakAldi));