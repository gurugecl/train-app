import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectIdleValue } from '../actions/action_idle';
import '../components/Home.css';

class CalibrateIdle extends Component {
  render() {
    return (
      <div className="calibrateIdle section">
        <p id="demo">
          Idle: <span>{this.props.idleValue}</span>
        </p>
        <div
          id="slidecontainer"
          onClick={() => this.props.selectIdleValue(this.myInput.value)}
        >
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            id="myRange"
            ref={ref => (this.myInput = ref)}
          />
        </div>
        <h1>Calibrate Idle</h1>
      </div>
    );
  }
}

function mapStateToProps({ idleValue }) {
  return { idleValue };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectIdleValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalibrateIdle);
