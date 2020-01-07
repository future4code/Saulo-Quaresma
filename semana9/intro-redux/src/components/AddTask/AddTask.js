import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

class AddTask extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <TextField label="O que tem que ser feito?" />
            </div>
        )
    }
}

export default AddTask;