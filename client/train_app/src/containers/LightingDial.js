import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectLightStatus } from "../actions/action_light";
import '../components/Home.css';
import lighting from '../images/lighting.gif';

class LightingDial extends Component {
    render() {

        return (
            <div className="lightingDial section">
                <img src={lighting} className="lightingImage" alt="light" />
                <h1>Lighting</h1>
            </div>
        );
    }
}

// function mapStateToProps (state) {
//     return { state };
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectLightStatus }, dispatch);
}

export default connect(null, mapDispatchToProps)(LightingDial);