import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectLightValue } from "../actions/action_light";
import '../components/Home.css';

class CalibrateLight extends Component {
    render() {
        return (
            <div className="calibrateLight section">
                <p id="demo">Ambient Light: <span>{this.props.lightValue}</span></p>
                <div id="slidecontainer" onClick={ () => this.props.selectLightValue(this.myInput.value) }>
                    <input type="range" min="1" max="100" className="slider" id="myRange" ref={ref => this.myInput = ref}/>
                </div>
                <h1>Calibrate Ambient Light</h1>
            </div>
        );
    }
}

function mapStateToProps({lightValue}) {
    return { lightValue };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectLightValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalibrateLight);