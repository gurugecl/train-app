import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Link } from 'react-router-dom';
// import { Navbar, NavItem, Nav } from '../bootstrap.css';

class Header extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Train WebApp</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/" activeClassName="active">Home</Link></li>
                                <li><Link to="/pictures" activeClassName="active">Pictures</Link></li>
                                <li><Link to="/sounds" activeClassName="active">Sounds</Link></li>
                                <li><Link to="/build" activeClassName="active">Build</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/*<Navbar inverse collapseOnSelect>*/}
                    {/*<Navbar.Header>*/}
                        {/*<Navbar.Brand>*/}
                            {/*<a href="#">React-Bootstrap</a>*/}
                        {/*</Navbar.Brand>*/}
                        {/*<Navbar.Toggle />*/}
                    {/*</Navbar.Header>*/}
                    {/*<Navbar.Collapse>*/}
                        {/*<Nav>*/}
                            {/*<NavItem eventKey={1} href="#">Link</NavItem>*/}
                            {/*<NavItem eventKey={2} href="#">Link</NavItem>*/}
                        {/*</Nav>*/}
                        {/*<Nav pullRight>*/}
                            {/*<NavItem eventKey={1} href="#">Link Right</NavItem>*/}
                            {/*<NavItem eventKey={2} href="#">Link Right</NavItem>*/}
                        {/*</Nav>*/}
                    {/*</Navbar.Collapse>*/}
                {/*</Navbar>*/}

                {/*<div className="container">*/}
                    {/*{this.props.children}*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Header