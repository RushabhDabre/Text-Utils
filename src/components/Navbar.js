import React from "react";
// write rfc for react
// write impt for proptypes
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { BrowserRouter, Router, Route } from "react-router-dom";


export default function Navbar(props) {


    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {props.title}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                {/* Home */}
                            </a>
                            {/* <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" >
                                {/* {props.abouttext} */}
                            </a>
                            {/* <Link className="nav-link" to="/About" >
                                {props.abouttext}
                            </Link> */}
                        </li>
                    </ul>

                    <div className="btn-toolbar  mx-4" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" className="btn btn-light my-2" onClick={props.toggleModeLight}>Light</button>
                            <button type="button" className="btn btn-dark my-2" onClick={props.toggleModeDark}>Dark</button>
                            <button type="button" className="btn btn-danger my-2" onClick={props.toggleModeDanger}>Danger</button>
                            <button type="button" className="btn btn-success my-2" onClick={props.toggleModeSuccess}>Success</button>
                            <button type="button" className="btn btn-info my-2" onClick={props.toggleModeSky}>Sky</button>
                            {/* <button type="button" className="btn btn-light" onClick={props.toggleMode}>Light</button>
                            <button type="button" className="btn btn-dark" onClick={props.toggleMode}>Dark</button>
                            <button type="button" className="btn btn-danger" onClick={props.toggleMode}>Danger</button>
                            <button type="button" className="btn btn-success" onClick={props.toggleMode}>Success</button>
                            <button type="button" className="btn btn-info" onClick={props.toggleMode}>Sky</button> */}
                        </div>
                    </div>

                    {/* <div className={`form-check form-switch mx-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'light' : 'dark'}Mode</label>
                    </div> */}



                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode === 'light' ? 'dark' : 'light'}`} type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    abouttext: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'set title here',
    abouttext: 'set about here'
};