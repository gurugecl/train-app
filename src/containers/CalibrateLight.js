import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectLight } from "../actions/action_light";
import Slider from 'react-md/lib/Sliders';
import '../components/Home.css';

class CalibrateLight extends Component {
    render() {
        console.log(this.props.asdf);
        return (
            <div className="calibrateLight">
                <Slider id="lightSlider" className="md-cell md-cell--12" type="range" min={0} max={10} defaultValue={4}/>
                <h1>Calibrate Ambient Light</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(CalibrateLight);