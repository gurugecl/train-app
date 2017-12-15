import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class Build extends Component {
    render() {
        return (
            <div className="Build">
                <Grid>
                    <Row className="row pageHeader">
                        <Col md={12}>
                            <h1 className="title"><b>Build</b></h1>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Build;