import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div className="navigation">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand"><b>Train WebApp</b></a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/" activeClassName="active"><b>Motor/Lights</b></Link></li>
                                <li><Link to="/pictures" activeClassName="active"><b>Pictures</b></Link></li>
                                <li><Link to="/sounds" activeClassName="active"><b>Sound</b></Link></li>
                                <li><Link to="/data" activeClassName="active"><b>Data</b></Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header