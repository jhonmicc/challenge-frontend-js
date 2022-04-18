import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import './DetailCar.css';
import car_prod from '../../Images/car.png';
import { FiUsers } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import axios from 'axios';
import { useSelector } from 'react-redux';

const DetailCar = () => {
	const displayedData = useSelector((state) => state.render[0])
	console.log(displayedData);
	return (
		<>
			{!isEmpty(displayedData) ? (
				<div>
					<Header />
					<Hero>
						<section class="detail">
							<div class="bungkus bungkus-flex">
								<div class="tentang-paket-box">
									<div class="tentang-paket">
										<h6 class="tentang-paket-judul">Tentang Paket</h6>
										<h6 class="include-judul">Include</h6>
										<ul class="include">
											<li>
												Apa saja yang termasuk dalam paket misal durasi max 12
												jam
											</li>
											<li>Sudah termasuk bensin selama 12 jam</li>
											<li>Sudah termasuk Tiket Wisata</li>
											<li>Sudah termasuk pajak</li>
										</ul>
										<h6 class="exclude-judul">Exclude</h6>
										<ul class="exclude">
											<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
											<li>
												Jika overtime lebih dari 12 jam akan ada tambahan biaya
												Rp 20.000/jam
											</li>
											<li>Tidak termasuk akomodasi penginapan</li>
										</ul>
										<h6 class="refund-judul">Refund, Reschedule, Overtime</h6>
										<ul class="refund-info">
											<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
											<li>
												Jika overtime lebih dari 12 jam akan ada tambahan biaya
												Rp 20.000/jam
											</li>
											<li>Tidak termasuk akomodasi penginapan</li>
											<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
											<li>
												Jika overtime lebih dari 12 jam akan ada tambahan biaya
												Rp 20.000/jam
											</li>
											<li>Tidak termasuk akomodasi penginapan</li>
											<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
											<li>
												Jika overtime lebih dari 12 jam akan ada tambahan biaya
												Rp 20.000/jam
											</li>
											<li>Tidak termasuk akomodasi penginapan</li>
										</ul>
									</div>
									<div class="lanjutbayarbtn">
										<a href="">Lanjutkan Pembayaran</a>
									</div>
								</div>
								<div class="detail-mobil">
									<div class="card">
										<img src={car_prod} class="card-img-top" alt="Car" />
										<div class="card-body">
											<h5 class="card-title">
												{displayedData.name} / {displayedData.category}
											</h5>
											<ul class="car-detail">
												<li class="d-flex align-items-center">
													<FiUsers />
													{displayedData.jumlah_penumpang}
												</li>
												<li class="d-flex align-items-center">
													<FiSettings />
													Manual
												</li>
												<li class="d-flex align-items-center">
													<AiOutlineCalendar />
													{displayedData.tanggal}
												</li>
											</ul>
											<div class="total-harga">
												<h4 class="total">Total</h4>
												<h4 class="total-angka">Rp {displayedData.price}</h4>
											</div>
											<div class="set-btn d-flex justify-content-between my-3">
												<a href="#" class="btn btn-success pilihmobilbtn">
													Pilih Mobil
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</Hero>
					<Footer />
				</div>
			) : null}
		</>
	);
};

export default DetailCar;
