import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch, dispatchSet, Input } from 'redux-easy';
import '../components/Home.css';
import lighting from '../images/lighting.gif';
// import { bindActionCreators } from 'redux';
// import { selectLightStatus } from '../actions/action_light';

class LightingDial extends Component {
  mqttPower = event => {
    const { value } = event.target;
    dispatch('setLight', value);

    dispatchSet('light.lightLevel', value);
  };

  render() {
    const { light } = this.props;
    return (
      <div className="lightingDial section">
        <img src={lighting} className="lightingImage" alt="light" />
        <input onChange={this.mqttPower} value={light.lightLevel} />
          {/*<Input path="light.lightLevel" />*/}
        <h1>Lighting</h1>
      </div>
    );
  }
}

const mapState = state => {
  const { light } = state;
  return { light };
};

export default connect(mapState)(LightingDial);

//regular Redux
// function mapStateToProps (state) {
//     return { state };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectLightStatus }, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(LightingDial);
