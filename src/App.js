import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Inicio from './components/Inicio';
import CrudUser from './components/CrudUser';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import ErrorPage from './components/ErrorPage';

const App = () => {

    return (
        <Router>
            <div className="container mt-5">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <span className="navbar-brand">Sora</span>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" aria-current="page" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>Inicio</NavLink>
                                </li>
                                <li className="nav-item" >
                                    <NavLink to="CrudUser" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>User Crud</NavLink>
                                </li>
                                <li className="nav-item" >
                                    <NavLink to="Nosotros" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>Nosotros</NavLink>
                                </li>
                                <li className="nav-item" >
                                    <NavLink to="/Contacto" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>Contacto</NavLink>
                                </li>

                            </ul>
                            <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            <hr />
                <Routes>
                    <Route path="/" exact element={<Inicio />} errorElement={<ErrorPage />} />
                    <Route path="/CrudUser" element={<CrudUser />} />
                    <Route path="/Nosotros" element={<Nosotros />} />
                    <Route path="/Contacto" element={<Contacto />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App