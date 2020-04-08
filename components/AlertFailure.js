import React from 'react'
import { Alert } from 'react-bootstrap';


function AlertFailure(props) {
    if (props.showFailAlert) {
        return (
            <Alert variant="danger" onClose={() => props.setShowFailAlert(false)} dismissible>
                <Alert.Heading>Job Post Failed</Alert.Heading>
                <p>
                    Something went wrong...
                </p>
            </Alert>
        );
    }
    return null;
}

export default AlertFailure