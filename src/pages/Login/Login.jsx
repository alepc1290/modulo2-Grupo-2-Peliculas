import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { getLSItems, setLSItems } from '../../utils/function';


function Login() {
    const [errorLogin, setErrorLogin] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        const dataUser = getLSItems("userData");
        if (dataUser.username === data.username) {
            if (dataUser.password === data.password) {
                setLSItems("isAdmin", true);
                navigate("/Home");
                setErrorLogin("")
                return;
            } else {
                setLSItems("isAdmin", false)
                return setErrorLogin("Datos Incorrectos")
            }
        } else {
            setLSItems("isAdmin", false)
            return setErrorLogin("Datos Incorrectos")
        }
    }
    return (
        <>
            <NavbarComp />
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <button>Iniciar Sesion</button>
            </form>
            {errorLogin && <p style={{ color: "red" }}>{errorLogin}</p>}
        </>
    )
}

export default Login;
