import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPowerValue } from '../actions/action_power';
import '../components/Home.css';
import power from '../images/power.gif';

class PowerDial extends Component {
  mqttPower = e => {
    // (e.target.value); //gets sent to mqtt to update train.
    console.log('Changing Train Power to', e.target.value);
    this.props.selectPowerValue(this.props.powerValue); // Once mqtt updates value is sent back to client to update store state
  };

  render() {
    return (
      <div className="powerDial section" onSubmit={this.mqttPower}>
        <img src={power} className="powerImage" alt="power" />
        <h1>Power</h1>
        /*{this.props.powerValue} //power value*/
      </div>
    );
  }
}

function mapStateToProps(powerValue) {
  return {
    powerValue,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPowerValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PowerDial);
