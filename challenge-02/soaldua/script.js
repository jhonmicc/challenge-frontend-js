let checkTypeNumber = (givenNumber) => {
    let check = typeof givenNumber;
    if (check == "number") {
        if (givenNumber % 2 == 0) {
            return "GENAP";
        } else {
            return "GANJIL";
        }
    } else if (check == "undefined") {
        return "Error: Bro where is the parameter?";
    } else {
        return "Error: Invalid data type";
    }
};
console.log(checkTypeNumber(8));

// let checkTypeNumber = (givenNumber) => {
//     if (givenNumber % 2 === 0) {
//         return "GENAP";
//     } else if (givenNumber % 2 === 1) {
//         return "GANJIL";
//     } else if (givenNumber === "") {
//         return "Error: Bro where is the parameter?";
//     } else {
//         return "Error: Invalid data type";
//     }
// };