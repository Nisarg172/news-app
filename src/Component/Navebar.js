import React, { Component } from 'react'

import { Link } from "react-router-dom";
export default class Navebar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top m-2">
                <a className="navbar-brand " href="/">News app</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/business">business</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">entertainment</Link></li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/health">health</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">science</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">sports</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">technology</Link></li>

                        </ul>
                        </ul>
                    </div>
                </nav></>


        )
    }
}


