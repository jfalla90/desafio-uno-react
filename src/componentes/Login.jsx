import React from 'react'
import { useState } from 'react';

const Login = () => {

    
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    const validarCuenta = (e) => {
        if ( email === "" || password === ""){
            alert ("Existen campos incompletos");
            return false
        };

        if ( password.length < 6 ) {
            alert('contraseña debe tener mínimo 6 dígitos');
            return false
        }

        alert("Bienvenido a 🍕 Pizzería Mamma Mía")
        return true
    };
  return (
    <div>
        <h2>Ingresa tu usuario y contraseña</h2>
        <form onSubmit={useState}>
            <label>Ingresa tu correo</label>
            <input type="email" placeholder='email@email.com' name='email' onChange={(e) => setEmail(e.target.value)}/><br />
            <label>Ingresa tu clave</label>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/><br />
            <button type='button' className='logear' onClick={validarCuenta}>Ingresar</button>
        </form>
    </div>
  )
}

export default Login
