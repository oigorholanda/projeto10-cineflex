import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Horario({ dia, data, horarios }) {
    return (
        <Container>
            <p>{dia} - {data}</p>
            <Blink to='/assentos/:idSessao'>
                {horarios.map((h) => <Hora>{h.name}</Hora>)}
            </Blink>
        </Container>
    )
}

const Container = styled.div`
    p{
        text-align: start;
        font-size: 20px;
    }
`

const Blink = styled(Link)`
    width: 190px;
    margin-left: 25px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const Hora = styled.div`
    width: 82px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
` 