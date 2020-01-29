import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledMainContainer = styled.main`
  text-align: center;
`

const StyledDaysRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-weight: bold;
`


class Planner extends React.Component {
  render() {
    return (
      <StyledMainContainer>
        <h1>Planner</h1>
        
        <div>
          <form>
            <label htmlFor="nova-tarefa">Nova Tarefa: </label>
            <input type="text" placeholder="Nome da tarefa"/>
          </form>
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
      </StyledMainContainer>
    )  
  }
}

export default connect()(Planner);
