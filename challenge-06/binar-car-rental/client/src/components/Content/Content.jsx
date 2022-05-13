import React from 'react'
import './Content.css';

const Content = () => {

    return (
        <main>
            <section className="search-car">
                <div className="search__car">
                    <div className="tipe__driver">
                        <label htmlFor="">Tipe Driver</label>
                        <select className="form-select form-control" aria-label="Default select example" >
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

                        />
                    </div>
                    <div className="waktu">
                        <label htmlFor="">Waktu Jemput/Ambil</label>
                        <input
                            type="time"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Pilih Tanggal"

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
                        />
                    </div>
                    <a
                        className="btn align-items-end"
                        href="/#"
                        role="button"
                    >
                        Cari Mobil
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Content