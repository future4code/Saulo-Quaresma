import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin-top: 50px;
`

class Filters extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <StyledDiv>
                <Button variant="contained">Marcas todas como completas</Button>
                <Button variant="contained">Todas</Button>
                <Button variant="contained">Pendentes</Button>
                <Button variant="contained">Completas</Button>
                <Button variant="contained">Remover completas</Button>
            </StyledDiv>
        )
    }
}

export default Filters;