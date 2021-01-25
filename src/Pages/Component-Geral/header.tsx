import React from 'react';
import logo from '../../assets/icon.svg'
import './header.css'


export default () => {
	

return (
    <header className="page-header">

    <div className="header-container">

      <div className="logo-container">
	   <a href="/">
        <img src={logo} alt="Mangas"></img>
		</a>
      </div>

      <div className="links-container">
          <a href="/">Navegar</a>
          <a href="/">Favoritos</a>
          <a href="/">Generos</a>
      </div>

        <div className="login-container">
          <a href="/">Login</a>
          <a href="/">Criar Conta</a>
        </div>

    </div>
  </header>
)
}