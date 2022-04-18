import React, { useEffect, useState } from 'react';
import './Content.css';
import car_prod from '../../Images/car.png';
import { FiUsers } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { carActions } from '../../Store/carSlice';

const Content = () => {
	// const [allData, setAllData] = useState([]);
	// const [filtered, setFiltered] = useState([]); //menampung hasil filter
	// const [tipeDriver, setTipeDriver] = useState('');
	// const [tanggal, setTanggal] = useState('');
	// const [waktuJemput, setWaktuJemput] = useState('');
	// const [jumlahPenumpang, setJumlahPenumpang] = useState('');

	const filtered = useSelector((state) => state.render)
	const tipeDriver = useSelector((state) => state.tipeDriver)
	const tanggal = useSelector((state) => state.tanggal)
	const waktuJemput = useSelector((state) => state.waktuJemput)
	const jumlahPenumpang = useSelector((state) => state.jumlahPenumpang)


	console.log(filtered, tipeDriver);
	const dispatch = useDispatch();
	const onSubmit = () => {
		dispatch(carActions.filteredData())
	};

	const handleButton = (id) => {
		dispatch(carActions.handleIdButton(id))
	}

	const handleTipeDriver = (e) => {
		const res = e.currentTarget.options[e.currentTarget.selectedIndex].value;
		console.log(res);
		dispatch(carActions.handleTipeDriver(res === 'true'));
	};

	const handleTanggal = (e) => {
		console.log(e.currentTarget.value);
		dispatch(carActions.handleTanggal(e.currentTarget.value))
	};
	const handleWaktuJemput = (e) => {
		console.log(e.currentTarget.value);
		dispatch(carActions.handleWaktuJemput(e.currentTarget.value))
	};
	const handleJumlahPenumpang = (e) => {
		dispatch(carActions.handleJumlahPenumpang(e.currentTarget.value))
	};

	return (
		<main>
			<section className="search-car">
				<div className="search__car">
					<div className="tipe__driver">
						<label htmlFor="">Tipe Driver</label>
						<select className="form-select" aria-label="Default select example" onChange={handleTipeDriver}>
							<option defaultValue>Pilih Tipe Driver</option>
							<option value="true">Dengan Sopir</option>
							<option value="false">Tanpa Sopir</option>
						</select>
					</div>
					<div className="tanggal">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Tanggal
						</label>
						<input
							type="date"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Pilih Tanggal"
							onChange={handleTanggal}
						/>
					</div>
					<div className="waktu">
						<label htmlFor="">Waktu Jemput/Ambil</label>
						<input
							type="time"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Pilih Tanggal"
							onChange={handleWaktuJemput}
						/>
					</div>
					<div className="jumlah__penumpang">
						<label htmlFor="jumlahpenumpang" className="form-label">
							Jumlah Penumpang (optional)
						</label>
						<input
							type="number"
							min="0"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Jumlah Penumpang"
							onChange={handleJumlahPenumpang}
						/>
					</div>
					<a
						className="btn btn-success align-items-end"
						href="#"
						role="button"
						onClick={onSubmit}
					>
						Cari Mobil
					</a>
				</div>
			</section>
			<section className="hasil-pencarian">
				<div className="bungkus">
					<div className="row">
						{/* map */}
						{filtered.map((value, key) => {
							return (
								<div className="col-4" key={key} datas={filtered}>
									<div className="card">
										<img src={car_prod} className="card-img-top" alt="Car" />
										<div className="card-body">
											<h5 className="card-title">{value.name}</h5>
											<span className="price">Rp {value.price} / hari</span>
											<p className="desc-mobil">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua.{' '}
											</p>
											<ul className="car-detail">
												<li className="d-flex">
													<FiUsers />
													{value.jumlah_penumpang} orang
												</li>
												<li className="d-flex">
													<FiSettings />
													Manual
												</li>
												<li className="d-flex">
													<AiOutlineCalendar />
													{value.tanggal.split('-').reverse().join('/')}
												</li>
											</ul>
											<div className="set-btn d-flex justify-content-between">
												<Link to={`/detail/${value.id}`} className="btn btn-success pilihmobilbtn" onClick={() => handleButton(value.id)}>
													Pilih Mobil
												</Link>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Content;
