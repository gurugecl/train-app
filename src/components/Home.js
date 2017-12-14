import React, { Component } from 'react';
import logo from '../images/logo.jpg';
import './Home.css';
//import {RadialGauge} from 'canvas-gauges';
import LightingDial from '../containers/LightingDial';
import CalibrateIdle from '../containers/CalibrateIdle';
import CalibrateLight from '../containers/CalibrateLight';
import Compass from '../containers/Compass';
import Connectivity from '../containers/Connectivity';
import LightSlider from '../containers/LightSlider';
import PowerDial from '../containers/PowerDial';
import SpeedSlider from '../containers/SpeedSlider';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">The Jove Express</h1>
        </header>
          <Grid>
              <Row className="row">
                  <Col md={12}>
                    <Connectivity />
                  </Col>
              </Row>
              <Row className="row">
                  <Col md={6}>
                    <PowerDial />
                  </Col>
                  <Col md={6}>
                    <LightingDial />
                  </Col>
              </Row>
              <Row className="row">
                  <Col md={6}>
                    <SpeedSlider />
                  </Col>
                  <Col md={6}>
                    <LightSlider />
                  </Col>
              </Row>
              <Row className="row">
                 <Col md={6}>
                    <CalibrateIdle />
                 </Col>
                 <Col md={6}>
                    <CalibrateLight />
                 </Col>
              </Row>
              <Row className="row">
                  <Col md={12}>
                    <Compass />
                  </Col>
              </Row>
          </Grid>
      </div>
    );
  }
}

export default Home;
