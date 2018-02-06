import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch } from 'redux-easy';
import '../components/Home.css';
import powerPic from '../images/power.gif';

class PowerDial extends Component {
  mqttPower = event => {
      const { value } = event.target;
      dispatch('setPower', value);
  };

render() {
    const {power} = this.props;
    return (
        <div className="powerDial section">
            <img src={powerPic} className="powerImage" alt="power" />
            <input onChange={this.mqttPower} value={power.powerLevel} />
            <h1>Power</h1>
            <p>{power.powerLevel}</p>
        </div>
    );
}
}

const mapState = state => {
    const { light } = state;
    return { light };
};

export default connect(mapState)(PowerDial);


