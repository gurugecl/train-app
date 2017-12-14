import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectSpeed } from "../actions/action_speed";
import '../components/Home.css';
import speed from '../images/speed.jpg';

class SpeedSlider extends Component {
    render() {
        return (
            <div className="speedSlider">
                {/*<button onClick={ () => this.props.selectSpeed("fast")}>FAST</button>*/}
                {/*<button onClick={ () => this.props.selectSpeed("medium")}>MEDIUM</button>*/}
                {/*<button onClick={ () => this.props.selectSpeed("slow")}>SLOW</button>*/}
                {/*<button onClick={ () => this.props.selectSpeed("stop")}>STOP</button>*/}
                <img src={speed} className="speedImage" alt="speed" />
                <h1>Speed</h1>
            </div>
        );
    }
}

function mapStateToProps(speedStatus) {
    // console.log("The speed is set to " + speedStatus);
    return { speedStatus };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectSpeed}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedSlider);