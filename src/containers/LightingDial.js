import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectLight } from "../actions/action_light";
import '../components/Home.css';
import lighting from '../images/lighting.gif';

class LightingDial extends Component {
    render() {

        return (
            <div className="lightingDial">
                <img src={lighting} className="lightingImage" alt="light" />
                <h1>Lighting</h1>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return { state };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectLight }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LightingDial);