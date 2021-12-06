import React from 'react'
import "./Header.css";


const Header = () => {
  return (
    <section onClick={() => window.scroll(0, 0)} className="header">
      <div className="w-9/12 sm:py-3 py-1  mx-auto flex justify-between items-center">
        <img className="w-12" src="../../assets/logo.png" alt="logo" />
        <a href="https://github.com/Em-codes/movie-box-deluxe">
          <img className="w-12" src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" alt="github logo" />
        </a>
      </div>
    </section>
  )
}

export default Header

