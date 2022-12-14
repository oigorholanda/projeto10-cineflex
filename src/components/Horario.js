import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Horario({ dia, data, horarios }) {

    return (
        <>
            <TituloSessoes>{dia} - {data}</TituloSessoes>
            <Horarios>
            {horarios.map((h) =>
                <Blink to={`/assentos/${h.id}`}>
                    <Hora>{h.name}</Hora>
                </Blink>
            )}
            </Horarios>
        </>
    )
}

const TituloSessoes = styled.h3`
    text-align: start;
    font-size: 20px;
    margin: 25px;
`
const Horarios = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`

const Blink = styled(Link)`
    margin-left: 25px;
    text-decoration: none;
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