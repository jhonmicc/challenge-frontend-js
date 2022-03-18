let getSplitName = (givenName) => {
    var fullName = givenName.split(" ");
    var splittedName = fullName.length;
    switch (splittedName) {
        case 1:
            // var firstName = fullName[0];
            // var middleName = null;
            // var lastName = null;
            // console.log(
            //     `firstName: '${firstName}', middleName: ${middleName}, lastName: ${lastName}`
            // );
            var result1 = {
                firstName: `${fullName[0]}`,
                middleName: null,
                lastName: null,
            };
            console.log(result1);
            break;
        case 2:
            // var firstName = fullName[0];
            // var middleName = null;
            // var lastName = fullName[1];
            // console.log(
            //     `firstName: '${firstName}', middleName: ${middleName}, lastName: '${lastName}'`
            // );
            var result2 = {
                firstName: `${fullName[0]}`,
                middleName: null,
                lastName: `${fullName[1]}`,
            };
            console.log(result2);
            break;
        case 3:
            // var firstName = fullName[0];
            // var middleName = fullName[1];
            // var lastName = fullName[2];
            // console.log(
            //     `firstName: '${firstName}', middleName: ${middleName}, lastName: '${lastName}'`
            // );
            var result3 = {
                firstName: `${fullName[0]}`,
                middleName: `${fullName[1]}`,
                lastName: `${fullName[2]}`,
            };
            console.log(result3);
            break;
        default:
            console.log("Error: This function is only for 3 characters name");
            break;
    }
};
getSplitName("Aldi Daniela Pranata");
// getSplitName(0); // TypeError: givenName.split is not a function