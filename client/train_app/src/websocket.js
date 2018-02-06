// @flow

//Need to work on rewriting this for train app
import {dispatch, dispatchSet} from 'redux-easy';

import {reloadAlerts} from './instance-detail/instance-detail';

function configure(connection) {
    connection.onclose = () => {
        console.info('got WebSocket close');
        setTimeout(connect, 5000);
    };

    connection.onmessage = message => {
        const data = String(message.data);

        if (data.startsWith('MQTT ')) {
            const connected = data.endsWith('connected');
            dispatchSet('mqttConnected', connected);
            return;
        }

        if (data === 'reload alerts') {
            reloadAlerts();
            return;
        }

        try {
            // $FlowFixMe - doesn't think data is a string
            const change = JSON.parse(data);
            dispatch('setInstanceProperty', change);
        } catch (e) {
            console.info('unsupported WebSocket message:', data);
        }
    };

    connection.onopen = () =>
        console.info('got WebSocket connection');
}

function connect() {
    const {hostname} = window.location;
    const connection = new WebSocket(`ws://${hostname}:1337`);
    configure(connection);
}

export const websocketSetup = connect;
