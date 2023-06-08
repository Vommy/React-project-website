import {React} from 'react';
import  Button  from "./Button";
import { useState } from 'react';

function NavBar(props){

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.navTitle}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.dropFilter}
                </button>
                <ul className="dropdown-menu">
                    <li><Button buttonText="A-Z" buttonColor="primary"/></li>
                    <li><Button buttonText="Z-A" buttonColor="primary" /></li>
                    <li><Button buttonText="Ascending Dates"/></li>
                    <li><Button buttonText="Descending Dates"/></li>
                </ul>
                </div>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;