import React, { Component } from 'react';
import '../components/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {
  profileFromDb,
  lightFromDb,
  voltageFromDb,
} from '../actions/action_dbvalues';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../components/Home.css';

const URL_PREFIX = 'http://localhost:3001/';

class Data extends Component {
  async componentDidMount() {
    await this.pullFromDb();
  }

  async pullFromDb () {
      const apiRequestProfiles = fetch(`${URL_PREFIX}profiles`);
      const apiRequestLight = fetch(`${URL_PREFIX}light`);
      const apiRequestVoltage = fetch(`${URL_PREFIX}voltage`);
      const [profiles, light, voltage] = await Promise.all([
          apiRequestProfiles,
          apiRequestLight,
          apiRequestVoltage,
      ]);
      this.props.profileFromDb(await profiles.json());
      this.props.lightFromDb(await light.json());
      this.props.voltageFromDb(await voltage.json());
  }

  async removeProfile(id) {
    let profiles = this.props.profileDbValue;
    let profile = profiles.find(profile => profile.id === id);

    let request = new Request(`${URL_PREFIX}remove/ ${id}`, {
      method: 'DELETE',
    });

    try {
      let response = await fetch(request);
      profiles.splice(profiles.indexOf(profile), 1);
      this.props.profileFromDb(profile);
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }

  async clearAllProfiles() {
    let profiles = this.props.profileDbValue;

    let request = new Request(`${URL_PREFIX}/profiles`, {
      method: 'DELETE',
    });
    try {
      let response = await fetch(request);
      profiles = [];
      this.props.profileFromDb(profiles);
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }

  async addProfile(event) {
    event.preventDefault();
    let profile_data = {
      name: this.nameInput.value,
      environment: this.environmentInput.value,
      // id: Math.random().toFixed(0),
    };
      console.log("profile_data", profile_data);

    let options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile_data),
    };

    try {
        await fetch(`${URL_PREFIX}profiles`,options);
        await this.pullFromDb();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { profileDbValue, lightDbValue, voltageDbValue } = this.props;

    // if (!profileDbValue || !voltageDbValue || !lightDbValue) {
    //   return null;
    // }
    return (
      <div className="Build">
        <Grid>
          <Row className="row pageHeader">
            <Col md={12}>
              <h1 className="title">
                <b>Data</b>
              </h1>
            </Col>
          </Row>
          <Row className="row dataRow">
            <Col md={4}>
              <h1 className="data profileData">
                <b>Profiles</b>
              </h1>
              <form ref="profileForm" className="profileForm">
                <input
                  type="text"
                  ref={ref => (this.nameInput = ref)}
                  placeholder="Name"
                />
                <input
                  type="text"
                  ref={ref => (this.environmentInput = ref)}
                  placeholder="Environment"
                />
                <button
                  className="addButton"
                  onClick={this.addProfile.bind(this)}
                >
                  ADD
                </button>
              </form>
              <ul className="center">
                {profileDbValue.map(profiles => (
                  <li className="dataRows dataLines" key={profiles.id}>
                    NAME: {profiles.name} <br/>
                      ENVIRONMENT: {profiles.environment}
                    <button
                      className="dataButton"
                      onClick={this.removeProfile.bind(this, profiles.id)}
                    >
                      DELETE
                    </button>{' '}
                  </li>
                ))}
                <button
                  className="dataButton"
                  onClick={this.clearAllProfiles.bind(this)}
                >
                  CLEAR ALL
                </button>
              </ul>
            </Col>
            <Col md={4}>
              <h1 className="data lightData">
                <b>Light Data</b>
              </h1>
              <ul>
                {lightDbValue.map(light => (
                  <li className="dataLines" key={light.id}>
                    LEVEL: {light.level} <br/>
                      AMOUNT: {light.amount}{' '}
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={4}>
              <h1 className="data voltageData">
                <b>Voltage Data</b>
              </h1>
              <ul>
                {voltageDbValue.map(voltage => (
                  <li className="dataLines" key={voltage.id}>
                    LEVEL: {voltage.level} <br/>
                    AMOUNT: {voltage.amount}{' '}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({profileDbValue, lightDbValue, voltageDbValue}) {
console.log("profileDbValue", profileDbValue);
  return { profileDbValue, lightDbValue, voltageDbValue };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { profileFromDb, lightFromDb, voltageFromDb },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);
