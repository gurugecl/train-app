import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectLightStatus } from "../actions/action_light";
import '../components/Home.css';
import numbers from '../images/numbers.jpg';
import bluecircle from '../images/bluecircle.gif';
import plug from '../images/plug.jpg';
import heartbeat from '../images/heartbeat.gif';

class Connectivity extends Component {
    render() {
        console.log(this.props.asdf);
        return (
            <div className="connectivity section">
                <img src={heartbeat} className="heartbeatImage" alt="heartbeat" />
                <img src={numbers} className="numbersImage" alt="numbers" />
                <img src={plug} className="plugImage" alt="plug" />
                <img src={bluecircle} className="bluecirleImage" alt="bluecircle" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Connectivity);