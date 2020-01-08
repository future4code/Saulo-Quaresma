import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="list-container">
                <ul>
                    <li>Redux</li><span>X</span>
                </ul>
            </div>
        )
    }
}

export default TodoItem;