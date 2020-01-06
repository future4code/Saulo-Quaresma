import React, { Component } from 'react'

class AddTask extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder="O que tem que ser feito?"/>
                </form>
            </div>
        )
    }
}

export default AddTask;