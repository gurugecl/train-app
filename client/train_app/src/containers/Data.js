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
    const apiRequestProfiles = fetch(`${URL_PREFIX}profiles`);
    const apiRequestLight = fetch(`${URL_PREFIX}light`);
    const apiRequestVoltage = fetch(`${URL_PREFIX}voltage`);
    const [profiles, light, voltage] = await Promise.all([
      apiRequestProfiles,
      apiRequestLight,
      apiRequestVoltage,
    ]);
    const json = await profiles.json();
    console.log(json);
    this.props.profileFromDb(json);
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
      // console.log("Remove Profile", response.json());
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
      name: this.props.profileFromDb(this.nameInput.value),
      environment: this.props.profileFromDb(this.environmentInput.value),
      id: Math.random().toFixed(3),
    };
    let request = new Request(`${URL_PREFIX}profiles`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(profile_data),
    });
    let profiles = this.props.profileDbValue;
    profiles.push(profile_data);
    this.props.profileFromDb(profiles);

    try {
      let response = await fetch(request);
      return response.json();
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
              <form ref="profileForm">
                <input
                  type="text"
                  ref={ref => (this.nameInput = ref)}
                  placeholder="Name"
                />
                <input
                  type="text"
                  ref={ref => (this.environmentInput = ref)}
                  placeholder="Environments"
                />
                <button className="dataButton" onClick={this.addProfile.bind(this)}>
                  Add Profile
                </button>
              </form>
              <ul>
                {profileDbValue.map(profiles => (
                  <ul className="dataRows" key={profiles.id}>
                    {profiles.name} {profiles.environment}{' '}
                    <button className="dataButton"
                      onClick={this.removeProfile.bind(this, profiles.id)}
                    >
                      Remove Profile
                    </button>{' '}
                  </ul>
                ))}
                  <button className="dataButton" onClick={this.clearAllProfiles.bind(this)}>Clear All</button>
              </ul>
            </Col>
            <Col md={4}>
              <h1 className="data lightData">
                <b>Light Data</b>
              </h1>
              <ul>
                {lightDbValue.map(light => (
                  <ul key={light.id}>
                    {light.level} {light.amount}{' '}
                  </ul>
                ))}
              </ul>
            </Col>
            <Col md={4}>
              <h1 className="data voltageData">
                <b>Voltage Data</b>
              </h1>
              <ul>
                {voltageDbValue.map(voltage => (
                  <ul key={voltage.id}>
                    {voltage.level} {voltage.amount}{' '}
                  </ul>
                ))}
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { profileDbValue, lightDbValue, voltageDbValue } = state;
  console.log({ state });

  return { profileDbValue, lightDbValue, voltageDbValue };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { profileFromDb, lightFromDb, voltageFromDb },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);
