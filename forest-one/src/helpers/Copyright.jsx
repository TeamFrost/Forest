import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {"Copyright © "}
                Forest One
            {" "}
            {new Date().getFullYear()}
            {". "}
            <a href="http://forestone.ro/gdpr/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}} >GDPR</a>
        </Typography>
    );
}
