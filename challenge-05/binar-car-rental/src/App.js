// import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import BinarCarRentalComponent from './Components';
import DetailCar from './Components/DetailCar/DetailCar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { carActions } from './Store/carSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:3008/datas');
        const datas = await response.data;
        dispatch(carActions.setAllData(datas))
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BinarCarRentalComponent />} />
        <Route path="/detail/:id" element={<DetailCar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
