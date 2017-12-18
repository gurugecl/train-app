import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectLightStatus } from "../actions/action_light";
import '../components/Home.css';
import compass from '../images/compass.gif';

class Compass extends Component {
    render() {
        console.log(this.props.asdf);
        return (
            <div className="compass section">
                <img src={compass} className="compassImage" alt="compass" />
                <h1>Compass</h1>
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
    return bindActionCreators({ selectLightStatus }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Compass);