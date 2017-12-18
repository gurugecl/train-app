import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectIdleValue } from "../actions/action_idle";
import Slider from 'react-md/lib/Sliders';
import '../components/Home.css';

class CalibrateIdle extends Component {
    render() {
        return (
            <div className="calibrateIdle section">
                <p id="demo">Idle: <span>{this.props.idleValue}</span></p>
                <div id="slidecontainer" onSubmit={ () => this.props.selectIdleValue(50) }>
                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
                </div>
                <h1>Calibrate Idle</h1>
            </div>
        );
    }
}

function mapStateToProps({idleValue}) {
    console.log("The light is " + idleValue);
        return { idleValue };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectIdleValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalibrateIdle);