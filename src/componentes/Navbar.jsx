import React from 'react'

const Navbar = ({logout = "🔓 Logout" , profile = "🔓 Profile" , login = "🔐 Login" , register = "🔐 Register" }) => {
  const valores = {
    total: 25000,
    token: false
  };


  return (
    <main>
        <div className='tituloHeader'>
          <h3>¡Pizzería Mamma Mía!</h3>
          <p>🍕Home</p>
          <p>{register}</p>
          <p>{login}</p>          
        </div>
        <div>
          <p>🛒Total: $ {valores.total}</p>
        </div>
    </main>
  )
}

export default Navbar