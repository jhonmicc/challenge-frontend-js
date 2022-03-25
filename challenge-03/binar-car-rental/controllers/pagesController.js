exports.dashboard = (req, res) => {
    const title = 'Dashboard';
    const data = [{
        id: 1,
        user_email: 'tigernikson@gmail.com',
        car: 'Fortuner 2022',
        start_rent: 'Start Rent',
        finish_rent: 'Finish Rent',
        price: 1500000000,
        status: 'On Process',
    }, ];

    const data2 = [{
        id: 1,
        name: 'BMW 2022',
        category: 'Sport Car',
        price: 1500000000,
        startRent: 'Start Rent',
        finishRent: 'Finish Rent',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
    }, ];
    res.render('dashboard', { title: title, dashboard: data, dashboard: data2 });
};

exports.cars = (req, res) => {
    const title = 'List Car';
    const items = [{
        id: 1,
        img: '/images/car.png',
        name: 'Nama/Tipe Mobil',
        price: 430000,
        rent: 'Start rent - Finish rent',
        update: 'Updated at 4 Apr 2022, 09.00',
    }, ];
    res.render('cars', { title: title, cars: items });
};

exports.sign_in = (req, res) => {
    const title = 'Sign In';
    res.render('sign-in', { title: title });
};