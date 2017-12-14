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
            <div className="calibrateIdle">
                <Slider id="idleSlider" className="md-cell md-cell--12" type="range" min={0} max={10} defaultValue={4}/>
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
    return bindActionCreators({ selectLight: selectLight }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalibrateIdle);