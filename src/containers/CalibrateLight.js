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
                <div id="slidecontainer" onSubmit={ () => this.props.selectLightValue() }>
                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
                </div>
                <h1>Calibrate Ambient Light</h1>
            </div>
        );
    }
}

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

console.log("myRange: " + slider);
console.log("demo: " + output);
// output.innerHTML = slidingValue;
//
// let slidingValue = slider.onSubmit = () => {
//     output.innerHTML = this.value;
// };

function mapStateToProps({lightValue}) {
    console.log("The light is " + lightValue);
    return { lightValue };

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectLightValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalibrateLight);