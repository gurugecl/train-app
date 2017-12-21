import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import  { selectLightStatus } from "../actions/action_light";
import '../components/Home.css';

class LightSlider extends Component {

    render() {
        return (
            <div className="lightSlider section">
                <h1 className="lightStatusText">Light: { this.props.lightStatus }</h1>
                <button onClick={ () => this.props.selectLightStatus("On") }><b>ON</b></button>
                <button onClick={ () => this.props.selectLightStatus("Off")}><b>OFF</b></button>
                <button onClick={ () => this.props.selectLightStatus("Auto")}><b>AUTO</b></button>
                <h1>Lights</h1>
            </div>
        );
    }
}

function mapStateToProps({ lightStatus }) {
    return { lightStatus } ;
}

function mapDispatchToProps(dispatch) {
        return bindActionCreators({selectLightStatus}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LightSlider);
