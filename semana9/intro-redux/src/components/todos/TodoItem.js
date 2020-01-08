import React, { Component } from 'react'

//mock de dados//
const todos = [
    {
        id: 1,
        text: "Se exercitar"
    },
    {
        id: 2,
        text: "Fazer compras"
    }
]


class TodoItem extends Component {
    constructor(props) {
        super(props)
    } 

    render() {
        return (
            <div className="list-container">
                <ul>
                    <li>Redux</li>
                    <button>X</button>
                </ul>
            </div>
        )
    }
}

export default TodoItem;