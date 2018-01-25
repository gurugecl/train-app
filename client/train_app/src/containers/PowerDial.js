import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLightStatus } from '../actions/action_light';
import '../components/Home.css';
import power from '../images/power.gif';

class PowerDial extends Component {
  render() {
    // console.log(this.props.asdf);
    return (
      <div className="powerDial section">
        <img src={power} className="powerImage" alt="power" />
        <h1>Power</h1>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//     return {
//         asdf: '123'
//     }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectLightStatus }, dispatch);
}

export default connect(null, mapDispatchToProps)(PowerDial);
