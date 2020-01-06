import React, { Component } from 'react'

class TaskFilters extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
               <select>
                   <option>Todas</option>
                   <option>Pendentes</option>
                   <option>Completas</option>
               </select>
            </div>
        )
    }
}

export default TaskFilters;