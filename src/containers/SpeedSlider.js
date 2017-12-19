import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectSpeed } from "../actions/action_speed";
import '../components/Home.css';

class SpeedSlider extends Component {
    render() {
        return (
            <div className="speedslider section">
                <p id="demo"><span>{this.props.speedValue}</span> mph</p>
                <div id="slidecontainer" onSubmit={ () => this.props.selectSpeed(0) }>
                    <input type="range" min="-100" max="100" value="0" className="speedSlider" id="Range"/>
                </div>
                <h1>Speed</h1>
            </div>
        );
    }
}

function mapStateToProps({speedValue}) {
    console.log("The speed is set to " + speedValue);
    return { speedValue };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectSpeed}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedSlider);