// import './App.css';
import BinarCarRentalComponent from './Components';
import DetailCar from './Components/DetailCar/DetailCar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
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
