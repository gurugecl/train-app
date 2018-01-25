import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSpeed } from '../actions/action_speed';
import '../components/Home.css';

class SpeedSlider extends Component {
  render() {
    return (
      <div className="speedslider section">
        <p id="demo">
          <span>{this.props.speedValue}</span> mph
        </p>
        <div
          id="slidecontainer"
          onClick={() => this.props.selectSpeed(this.myInput.value)}
        >
          <input
            type="range"
            min="-100"
            max="100"
            className="speedSlider"
            id="Range"
            ref={ref => (this.myInput = ref)}
          />
        </div>
        <h1>Speed</h1>
      </div>
    );
  }
}

function mapStateToProps({ speedValue }) {
  return { speedValue };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectSpeed }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedSlider);
