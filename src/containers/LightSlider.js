import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import  { selectLight } from "../actions/action_light";
import '../components/Home.css';

class LightSlider extends Component {

    render() {
        return (
            <div className="lightSlider section">
                <button onClick={ () => this.props.selectLight("on") }><b>ON</b></button>
                <button onClick={ () => this.props.selectLight("off")}><b>OFF</b></button>
                <button onClick={ () => this.props.selectLight("auto")}><b>AUTOMATIC</b></button>
                <h1>Lights</h1>
            </div>
        );
    }
}

function mapStateToProps(lightStatus) {
    console.log("The light is " + lightStatus);
    return { lightStatus };
}

function mapDispatchToProps(dispatch) {
        return bindActionCreators({selectLight}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LightSlider);
