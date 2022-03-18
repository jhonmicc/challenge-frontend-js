let isValidPassword = (password) => {
    let regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/);

    if (!password && password !== 0) {
        return "ERROR : Tidak ada password yang dimasukan";
    } else {
        if (typeof password == "number") {
            return "ERROR : Password yang dimasukan harus string";
        } else if (regex.test(password)) {
            return true;
        } else if (!regex.test(password)) {
            return false;
        }
    }
};

console.log(isValidPassword("Meong2021"));