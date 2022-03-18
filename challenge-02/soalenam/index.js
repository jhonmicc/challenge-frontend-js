let getAngkaTerbesarKedua = (dataNumbers) => {
    // math.max = mencari angka maksimal
    // .apply = menerima array sebagai parameternya
    var largest = Math.max.apply(null, dataNumbers);
    dataNumbers.splice(dataNumbers.indexOf(largest), 1);
    var secongLargest = Math.max.apply(null, dataNumbers);
    return secongLargest;
};
let arrayOfAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8, 9];
console.log(getAngkaTerbesarKedua(arrayOfAngka));