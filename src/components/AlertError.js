import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertError = ({message , guardarError , margin}) => {
    var classes = `w-25 fade bg-white ${margin}`
    return ( 
        <Alert className={classes} variant="" onClose={() => guardarError(false)} dismissible >
            <Alert.Heading>Error</Alert.Heading>
            <p className="text-muted">
                {message }
            </p>
        </Alert>    
     );
}
export default AlertError;