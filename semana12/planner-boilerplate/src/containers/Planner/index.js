import React from "react";
import { connect } from "react-redux";
import { createTask } from '../../actions/tasks';
import { getCreatedTasks } from '../../actions/tasks';
import styled from "styled-components";

const StyledMainContainer = styled.main`
  text-align: center;
`

const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledDaysRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: {},
      selectedDay: "",
    }
  };

  componentDidMount() {
    this.props.getTasks();
  }

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({ taskText: value });
  };

  handleSelectChange = event => {
    const { value } = event.target;
    this.setState({ selectedDay: value });
  };

  handleOnSubmit = event => {
    event.preventDefault()
    const day = this.state.selectedDay;
    const text = this.state.taskText;
    this.props.createTask(text, day);

    this.setState({ taskText: {} });
    this.setState({ selectedDay: "" });
  };

  render() {
    const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

    return (
      <StyledMainContainer>
        <h1>Planner</h1>

        <div>
          <StyledFormContainer>
            <label htmlFor="newTaskInput"><b>Nova Tarefa: </b></label>
            <input
              id="newTaskInput"
              name="text"
              type="text"
              onChange={this.handleInputChange}
              placeholder="Nome da tarefa"
            />

            <select value={this.state.value} onChange={this.handleSelectChange}>
              <option selected value="">Dia da Semana</option>
              <option value="Segunda">Segunda</option>
              <option value="Terça">Terça</option>
              <option value="Quarta">Quarta</option>
              <option value="Quinta">Quinta</option>
              <option value="Sexta">Sexta</option>
              <option value="Sábado">Sábado</option>
              <option value="Domingo">Domingo</option>
            </select>

            <button onClick={this.handleOnSubmit}>Adicionar</button>
          </StyledFormContainer>
        </div>

        <StyledDaysRow>
          {days.map(day => (
            <div>
              <h2>{day}</h2>
              <ul>{this.props.allTasks.filter(task => task.day === day).map(task => <li>{task.text}</li>)}
              </ul>
            </div>
          ))
          };
        </StyledDaysRow>

      </StyledMainContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allTasks: state.tasks.allTasks
  }
}

const mapToDispatchToProps = (dispatch) => {
  return {
    createTask: (text, day) => dispatch(createTask(text, day)),
    getTasks: () => dispatch(getCreatedTasks())
  }
}

export default connect(mapStateToProps, mapToDispatchToProps)(Planner);
