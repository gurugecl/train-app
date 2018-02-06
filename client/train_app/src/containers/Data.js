import React, { Component } from 'react';
import '../components/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { connect } from 'react-redux';
import '../components/Home.css';
import { dispatch } from 'redux-easy';

const URL_PREFIX = 'http://localhost:3001/';

class Data extends Component {

  async componentDidMount() {
    await this.pullFromDb();
  }

  pullFromDb = async () => {
    const apiRequestProfiles = fetch(`${URL_PREFIX}profiles`);
    const apiRequestLight = fetch(`${URL_PREFIX}light`);
    const apiRequestVoltage = fetch(`${URL_PREFIX}voltage`);
    const [profiles, light, voltage] = await Promise.all([
      apiRequestProfiles,
      apiRequestLight,
      apiRequestVoltage,
    ]);
      dispatch('setDBProfile', await profiles.json());
      dispatch('setDBLight', await light.json());
      dispatch('setDBVoltage', await voltage.json());
  };

  deleteProfile = async (id) => {
    let options = {
      method: 'DELETE',
    };
    try {
      await fetch(`${URL_PREFIX}profiles/${id}`, options);
      await this.pullFromDb();
    } catch (err) {
      console.log(err);
    }
  };

  deleteAllProfiles = async() => {
    let options = {
      method: 'DELETE',
    };
    try {
      await fetch(`${URL_PREFIX}profiles`, options);
      await this.pullFromDb();
    } catch (err) {
      console.log(err);
    }
  };

  addProfile = async(event) => {
    event.preventDefault();

    let profile_data = {
      name: this.nameInput.value,
      environment: this.environmentInput.value,
    };
    this.nameInput.value = '';
    this.environmentInput.value = '';

    let options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile_data),
    };

    try {
      await fetch(`${URL_PREFIX}profiles`, options);
      await this.pullFromDb();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { profileDbValue, lightDbValue, voltageDbValue } = this.props;

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
              <form ref="profileForm" className="profileForm" id="Form">
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
                  onClick={this.addProfile}
                >
                  ADD
                </button>
              </form>
              <ul className="center">
                {profileDbValue.map(profiles => (
                  <li className="dataRows dataLines" key={profiles.id}>
                    NAME: {profiles.name} <br />
                    ENVIRONMENT: {profiles.environment}
                    <button
                      className="dataButton"
                      onClick={() => this.deleteProfile(profiles.id)}
                    >
                      DELETE
                    </button>{' '}
                  </li>
                ))}
                <button
                  className="dataButton"
                  onClick={this.deleteAllProfiles}
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
                    LEVEL: {light.level} <br />
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
                    LEVEL: {voltage.level} <br />
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

const mapState = state => {
    const { profileDbValue, lightDbValue, voltageDbValue } = state;
    return { profileDbValue, lightDbValue, voltageDbValue };
};

export default connect(mapState)(Data);


