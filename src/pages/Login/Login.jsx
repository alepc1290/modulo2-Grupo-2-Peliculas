import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegurate que sea react-router-dom
import { getLSItems, setLSItems } from '../../utils/function';

function Login() {
    const [errorLogin, setErrorLogin] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const dataInput = Object.fromEntries(new FormData(form).entries());

        const listaUsuarios = getLSItems("users") || [];

        const usuarioEncontrado = listaUsuarios.find(
            (u) => u.username === dataInput.username && u.password === dataInput.password
        );

        if (usuarioEncontrado) {
            const esAdmin = usuarioEncontrado.role === "admin";
            
            setLSItems("isAdmin", esAdmin);
            setLSItems("userLogueado", usuarioEncontrado);
            
            setErrorLogin("");
            
            navigate(esAdmin ? "/admin" : "/home");
        } else {
            
            setLSItems("isAdmin", false);
            setErrorLogin("Usuario o contraseña incorrectos");
        }
    }

    return (
        <div className="login-page">
            
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Usuario:</label>
                    <input type="text" name="username" required />
                </div>
                <div className="input-group">
                    <label>Contraseña:</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit">Entrar</button>
            </form>
            
            {errorLogin && <p style={{ color: "red", marginTop: "10px" }}>{errorLogin}</p>}
        </div>
    )
}

export default Login;