import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';

class InputText extends React.Component {
    render(){
        console.log(this.props);
        return (
            <React.Fragment>
                <InputLabel>Labelize</InputLabel>
            </React.Fragment>
        );
    }
}

export default InputText;