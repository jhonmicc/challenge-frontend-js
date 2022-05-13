import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

// koneksikan action register dari auth
import { register } from "../actions/auth";

import './Login.css'
import img_login from '../../src/assets/images/img-auth.png'
import rectangle from '../../src/assets/images/rectangle.png'

// kalau kolom required masih kosong, maka akan menampilkan pesan alert
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

// memastikan email yang dimasukkan sudah valid
const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

// memastikan panjang karakter username yg dimasukkan sudah ketentuan
const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

// memastikan panjang karakter password yg dimasukkan sudah ketentuan
const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const Register = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            //Memantik action register, untuk melakukan proses auth, lalu kita cari action register()
            dispatch(register(username, email, password))
                .then(() => {
                    setSuccessful(true);
                })
                // validasi gagal melakukan register
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };

    return (
        <div className="wrapper d-flex align-items-center">
            <Form className="form-left" onSubmit={handleRegister} ref={form}>
                {/* conditional rendering */}
                {!successful && (
                    <div>
                        <img src={rectangle} alt="rectangle" />
                        <h1>Sign Up</h1>
                        <div className="form-group">
                            <label htmlFor="username">Name</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                validations={[required, vusername]}
                                placeholder="Nama Lengkap"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                validations={[required, validEmail]}
                                placeholder="Contoh: johndee@gmail.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required, vpassword]}
                                placeholder="6+ karakter"
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block">Sign Up</button>
                        </div>
                        <div className="signup">
                            <span className='ask'>Already have an account?</span>
                            <a className='signupfree text-decoration-underline' href="/login">Sign In here</a>
                        </div>
                    </div>
                )}

                {/* ketika message bernilai true, maka akan menampilkan komponen message. message dicek, jika true menampilkan success */}
                {message && (
                    <div className="form-group">
                        <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
            <div className="img-right">
                <img src={img_login} alt="img" />
            </div>

        </div>
    );
};

export default Register;
