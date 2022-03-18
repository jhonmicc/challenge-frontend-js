let checkEmail = (email) => {
    let pattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z.]+\.[a-zA-Z]{2,4}$/);

    if (email == null) {
        return "ERROR : Tidak ada data yang diinputkan";
    } else {
        if (typeof email === "number") {
            return "ERROR : Yang diinputkan adalah NUMBER";
        } else if (!pattern.test(email)) {
            var tanpaSimbol = email.indexOf("@");
            if (tanpaSimbol < 1) {
                return "ERROR : Format tidak dilengkapi @";
            } else {
                return "INVALID";
            }
        } else if (pattern.test(email)) {
            return "VALID";
        }
    }
};

// console.log(checkEmail("apranata@binar.co.id"));
// console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
// console.log(checkEmail("apranata"));
// console.log(checkEmail());
// console.log(checkTypeNumber(checkEmail(3322))); //bakalan error karena fungsi checkTypeNumber tidak didefinisikan