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

class Build extends Component {

    componentDidMount() {
        //check code for multiple fetch calls
        fetch('http://localhost:3000/profiles')
            .then(function(response){
                response.json()
                    .then(function(data) {
                        //check on this. profileFromDb(data);
                        this.props.profileFromDb(data);
                    })
            });
        fetch('http://localhost:3000/light')
            .then(function(response){
                response.json()
                    .then(function(data) {
                        this.props.lightFromDb(data);
                    })
            });
        fetch('http://localhost:3000/voltage')
            .then(function(response){
                response.json()
                    .then(function(data) {
                        this.props.voltageFromDb(data);
                    })
            })
    };

    removeProfile(id) {
        //check line below
        let profiles = this.props.profileFromDb();
        let profile = profiles.find(function (profile){
            return profile.id === id
        });

        let request = new Request (`http://localhost:3000/remove/ ${id}`, {
            method: 'DELETE'
        });

        fetch(request)
            .then(function(response){
                profiles.splice(profiles.indexOf(profile), 1);
                //check code below. updating the state for profile
                this.props.profileFromDb(profile);
                response.json()
                    .then(function(data) {
                    })
            })
    };

   addProfile(event){
        event.preventDefault();
        let profile_data = {
            name: this.props.profileFromDb(this.nameInput.value),
            permission: this.props.profileFromDb(this.permissionInput.value),
            id: Math.random().toFixed(3)
        };
        let request = new Request('http://localhost:3000/profile', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(profile_data)
        });
        let profiles = this.props.profileFromDb;
        profiles.push(profile_data);
        this.props.profileFromDb(data);

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
                                <input type="text" ref={ref => this.nameInput = ref} placeholder="Name" />
                                <input type="text" ref={ref => this.permissionInput = ref} placeholder="Permissions" />
                                <button onClick={this.addProfile.bind(this)}>Add Profile</button>
                            </form>
                            <ul>
                                {this.props.profileDbValue.map(profile => <li key={profile.id}>{profile.name} {profile.permission} <button onSubmit={this.removeProfile.bind(this, profile.id)}>Remove Profile</button> </li>)}
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h1 className="data lightData"><b>Light Data</b></h1>
                            <ul>
                                {this.props.lightDbValue.map(light => <li key={light.id}>{light.level} {light.amount} </li>)}
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h1 className="data voltageData"><b>Voltage Data</b></h1>
                            <ul>
                                {this.props.voltageDbValue.map(voltage => <li key={voltage.id}>{voltage.level} {voltage.amount} </li>)}
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