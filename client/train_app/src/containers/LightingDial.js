import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch } from 'redux-easy';
import '../components/Home.css';
import lighting from '../images/lighting.gif';

class LightingDial extends Component {
  mqttLight = event => {
    const { value } = event.target;
    dispatch('setLight', value);
  };

  render() {
      //grabbing from state
    const { light } = this.props;
    return (
      <div className="lightingDial section">
        <img src={lighting} className="lightingImage" alt="light" />
        <input onChange={this.mqttLight} value={light.lightLevel} />
        <h1>Lighting</h1>
        <p>{light.lightLevel}</p>
      </div>
    );
  }
}

const mapState = state => {
  const { light } = state;
  return { light };
};

export default connect(mapState)(LightingDial);
