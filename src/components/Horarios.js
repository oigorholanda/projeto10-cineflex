import styled from "styled-components"
import Footer from "./Footer"

export default function Horarios() {
    return (
        <>
            <ContainerHorarios>Horarios</ContainerHorarios>
            <Footer />
        </>
    )
}

const ContainerHorarios = styled.ul`
    margin-top: 80px;
    font-family: 'Roboto', sans-serif;
`