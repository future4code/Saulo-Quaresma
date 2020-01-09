import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskList: [],
        }
    }

    handleKeyPress = (event) => {
        if(event.key === 13) {
            this.onChangeInput()
        }
    }

    onChangeInput = (event) => {
        this.setState({taskList: event.target.value})
    }

    render() {
        return (
            <div>
                <TextField
                onChange={this.onChangeInput}
                value={this.state.taskList}
                onKeyDown={this.handleKeyPress}
                label="O que tem que ser feito?" />
                
            </div>
        )
    }
}

export default AddTask;