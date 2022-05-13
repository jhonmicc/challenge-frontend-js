import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import './Login.css'
import img_login from '../../src/assets/images/img-auth.png'
import rectangle from '../../src/assets/images/rectangle.png'

//Proses 7. Menuju ke folder actions dan file auth.js
import { login } from "../actions/auth";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

//Task 1. Mencari kode yang menghasilkan return error, ex. "user not Found!"
/**
 * What? Return Error,    
 * Why? Error,
 * When? setelah di klik tombol login,
 * How? ketika memasukan username dan password, lalu muncul error
 */

const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    //Proses 10. Jika action login fail maka komponen ini akan membaca variable isLoggedIn dan juga variable message dari Global Store
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch(); //Dia akan memantik action untuk mengakses global store dan atau api endpoint

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    //Task 4. Menemukan fungsi yang memantik proses autentikasi (jika benar langsung login, kalau salah ada pesas error), 
    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            //Task 5. Memantik action login, untuk melakukan proses autentikasi, lalu kita cari action login()
            dispatch(login(email, password))
                .then(() => {
                    //Proses 6. Jika berhasil akan masuk ke halaman /profile
                    // props.history.push("/profile");
                    window.location.reload();
                })
                //Proses 7. Jika gagal dia return false
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        if (user.roles.includes("ROLE_ADMIN")) {
            return <Redirect to="/dashboard" />;
        }
        return <Redirect to="/user" />;
    }

    //Sebagai contoh
    const message2 = "Ini ujicoba notifikasi"

    return (
        <div className="wrapper d-flex align-items-center">
            {/* Task 3. Menemukan fungsi yang memantik username dan password di proses, fokus handleLogin() */}
            <Form className="form-left" onSubmit={handleLogin} ref={form}>
                <img src={rectangle} alt="rectangle" />
                <h1>Welcome Back!</h1>
                <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <Input
                        type="email"
                        className="form-control"
                        name="username"
                        value={email}
                        onChange={onChangeEmail}
                        validations={[required]}
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
                        validations={[required]}
                        placeholder="6+ karakter"
                    />
                </div>

                {/* Task 2. Tombol login Ketemum (what, why, when, how) */}
                <div className="form-group">
                    <button className="btn btn-primary btn-block" disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Sign In</span>
                    </button>
                    <div className="signup">
                        <span className='ask'>Don't have an account?</span>
                        <a className='signupfree text-decoration-underline' href="/register">Sign Up for free</a>
                    </div>
                </div>

                {/* Proses 11. Ketika variable message true/ ada/available, maka dia otomatis mengeluarkan komponen message */}
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
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

export default Login;
