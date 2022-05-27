// import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import BinarCarRentalComponent from './Components';
import DetailCar from './Components/DetailCar/DetailCar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { carActions } from './Store/carSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Invoice from './Pages/Invoice';
import Pembayaran from './Pages/Pembayaran';
import BinarCarRental from './Pages/BinarCarRental';

const CARS_URL = 'http://localhost:3008/datas'

export const getData = createAsyncThunk('cars/getData', async () => {
    try {
        const response = await axios.get(CARS_URL);
        const datas = await response.data;
        // mendapatkan data untuk dimasukkan ke state terkini
        // dispatch(carActions.setAllData(datas))
        return datas
    } catch (error) {
        console.log(error);
    }
})

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BinarCarRentalComponent />} />
                <Route path="/detail/:id" element={<DetailCar />} />
                <Route path="/pembayaran" element={<Pembayaran />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/binarcarrental" element={<BinarCarRental />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
