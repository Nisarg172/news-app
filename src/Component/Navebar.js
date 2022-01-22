import React, { Component } from 'react'

import { Link } from "react-router-dom";



const Navebar = ()=> {
    
        return (
            <>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light sticky-top p-2 ">
                    <a className="navbar-brand  " href="/" >News app</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">entertainment</Link></li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link></li>

                               




                            </ul>
                        </ul>
                    </div>
                </nav>


            </>



        )
    }
export default Navebar


