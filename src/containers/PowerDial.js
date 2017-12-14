import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectLight } from "../actions/action_light";
import '../components/Home.css';
import power from '../images/power.gif';


class PowerDial extends Component {
    render() {
        console.log(this.props.asdf);
        return (
            <div className="powerDial">
                <img src={power} className="powerImage" alt="power" />
                <h1>Power</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(PowerDial);