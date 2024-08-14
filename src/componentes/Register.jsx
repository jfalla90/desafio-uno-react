import React from 'react'
import { useState } from 'react'

const Register = () => {

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmacion, setConfirmacion] = useState ("");

    const validarDatos = (e) => {
        if ( email === "" || password === "" || confirmacion === ""){
            alert ("Existen campos incompletos");
            return false
        };

        if ( password.length < 6 ) {
            alert('contraseña debe tener mínimo 6 dígitos');
            return false
        }

        if ( confirmacion !== password){
            alert("contraseñas deben coincidir")
            return false
        }

        alert("Registro exitoso")
        return true
    };

  return (
    <div>
        <h2>Regístrate</h2>
        <form action="" onSubmit={useState}>
            <label >Ingresa tu email </label>
            <input type="email" placeholder='email@email.com' name='email' onChange={(e) => setEmail(e.target.value)}/><br />
            <label>Ingresa tu contraseña </label>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/><br />
            <label>Confirma tu contraseña </label>
            <input type="password" placeholder='Repite password' onChange={(e) => setConfirmacion(e.target.value)}/><br />
            <button type='button' className='registro' onClick={validarDatos}>Registrar</button>
        </form>
        <hr />
    </div>
  )
}

export default Register