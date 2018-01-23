import React, { Component } from 'react';
import '../components/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {profileFromDb, lightFromDb, voltageFromDb} from "../actions/action_dbvalues";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import '../components/Home.css';

// let light;
// let voltage;
// let profiles;

class Build extends Component {

    componentDidMount() {
        fetch('http://localhost:3000/profiles')
            .then(function(response){
                response.json()
                    .then(function(data) {
                        profileFromDb(data);
                    })
            });

        //re-write this section
        fetch('http://localhost:3000/light')
            .then(function(response){
                response.json()
                    .then(function(data) {
                            lightFromDb(data);
                    })
            });
        fetch('http://localhost:3000/voltage')
            .then(function(response){
                response.json()
                    .then(function(data) {
                            voltageFromDb(data);
                    })
            })
    };

    removeProfile(id) {
        let that = this;
        let profiles = profileFromDb();
        let profile = profiles.find(function (profile){
            return profile.id === id
        });

        let request = new Request ('http://localhost:3000/remove/' + id, {
            method: 'DELETE'
        });

        fetch(request)
            .then(function(response){
                profiles.splice(profiles.indexOf(profile), 1);
                that.setState({
                     profiles
                });
                response.json()
                    .then(function(data) {
                    })
            })
    };

   addProfile(event){
        let that = this;
        event.preventDefault();
        let profile_data = {
            name: this.refs.profile_name.value,
            permission: this.refs.profile_permission.value,
            id: Math.random().toFixed(3)
        };
        let request = new Request('http://localhost:3000/new-profile', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(profile_data)
        });
        let profiles= that.state.profiles;
        profiles.push(profile_data);
       // that.setState({
            profileFromDb = profiles;
      //  });

        fetch(request)
            .then(function (response){
                response.json()
                    .then(function(data){
                    })
            })
            .catch(function (err) {
                console.log(err)
            })
    };


    render() {
        let profiles = this.state.profiles;
        let light = this.state.light;
        let voltage = this.state.voltage;
        return (
            <div className="Build">
                <Grid>
                    <Row className="row pageHeader">
                        <Col md={12}>
                            <h1 className="title"><b>Data</b></h1>
                        </Col>
                    </Row>
                    <Row className="row dataRow">
                        <Col md={4}>
                            <h1 className="data profileData"><b>Profiles</b></h1>
                            <form ref="profileForm">
                                <input type="text" ref="profile_name" placeholder="Name" />
                                <input type="text" ref="profile_permission" placeholder="Permissions" />
                                <button onClick={this.addProfile.bind(this)}>Add Profile</button>
                            </form>
                            <ul>
                                {profiles.map(profile => <li key={profile.id}>{profile.name} {profile.permission} <button onSubmit={this.removeProfile.bind(this, profile.id)}>Remove Profile</button> </li>)}
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h1 className="data lightData"><b>Light Data</b></h1>
                            <ul>
                                {light.map(light => <li key={light.id}>{light.level} {light.amount} </li>)}
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h1 className="data voltageData"><b>Voltage Data</b></h1>
                            <ul>
                                {voltage.map(voltage => <li key={voltage.id}>{voltage.level} {voltage.amount} </li>)}
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps({profileDbValue, lightDbValue, voltageDbValue}) {
    return { profileDbValue, lightDbValue, voltageDbValue };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ profileFromDb, lightFromDb, voltageFromDb }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Build);