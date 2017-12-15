import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectLight } from "../actions/action_light";
import Slider from 'react-md/lib/Sliders';
import '../components/Home.css';

class CalibrateIdle extends Component {
    render() {
        console.log(this.props.asdf);
        return (
            <div className="calibrateIdle section">
                <div id="slidecontainer">
                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
                </div>
                <h1>Calibrate Idle</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        asdf: '123'
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectLight }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalibrateIdle);