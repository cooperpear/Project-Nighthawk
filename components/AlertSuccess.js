import React from 'react'
import { Alert } from 'react-bootstrap';

function AlertSuccess(props) {
    if (props.showAlert) {
        return (
            <Alert variant="success" onClose={() => props.setShowAlert(false)} dismissible>
                <Alert.Heading>Estimate Saved!</Alert.Heading>
                <p>Check the Profile page to see a list of your estimates</p>
            </Alert>
        );
    }
    return null;
}

export default AlertSuccess