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
  font-weight: bold;
`

class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    }
  }

  componentDidMount() {
    this.props.getTasks()
  }

  handleFormFields = event => {
    const { name, value } = event.target;
    this.setState( {form: { ...this.state.form, [name]: value }} )
    console.log(event.target.value)
  };

  sendNewTask = event => {
    event.preventDefault()
    const { text, day } = this.state.form
    this.props.createTask(text, day)
  };

  // resetInput = () => {
  //   this.setState({ form: {} });
  // }
  
  handleOnClickButton = () => {
    this.sendNewTask()
  }

  

  render() {
    return (
      <StyledMainContainer>
        <h1>Planner</h1>

        <div>
          <StyledFormContainer onSubmit={this.sendTaskData}>
            <label htmlFor="newTaskInput"><b>Nova Tarefa: </b></label>
            <input
              id="newTaskInput"
              name="newTask"
              type="text"
              onChange={this.handleFormFields}
              placeholder="Nome da tarefa"
            />

            <select value={this.state.form} onChange={this.handleFormFields}>
              <option defaultValue>Dia da Semana</option>
              <option value="Segunda">Segunda</option>
              <option value="Terça">Terça</option>
              <option value="Quarta">Quarta</option>
              <option value="Quinta">Quinta</option>
              <option value="Sexta">Sexta</option>
              <option value="Sábado">Sábado</option>
              <option value="Domingo">Domingo</option>
            </select>

            <button onClick={this.handleOnClickButton}>Adicionar</button>
          </StyledFormContainer>
        </div>

        <StyledDaysRow>
          <p>Segunda</p>
          <p>Terça</p>
          <p>Quarta</p>
          <p>Quinta</p>
          <p>Sexta</p>
          <p>Sábado</p>
          <p>Domingo</p>
        </StyledDaysRow>

        <div>
          {this.props.allTasks.map(task => 
            <li key={task.id}>{task.text}</li>  
          )}
        </div>
                
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
