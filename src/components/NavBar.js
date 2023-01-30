import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({title="Null", home,about,card,toggleMode,mode}) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar -${mode} bg-${mode}`} >
  <Link className="navbar-brand" to="/">{title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  	
  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">{home}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{about}</Link>
      </li>
      </ul>
  </div>
  <div className={`form-check form-switch text-${(mode==='light')? 'black':'white'}`} >
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={toggleMode}/>
  
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable {mode==="light"?'dark':'light'} Mode</label> 
</div>
</nav>
  </>
  )
}
