import styled from "styled-components"
import Footer from "./Footer"

export default function Assentos() {
    return (
        <>
            <ContainerAssentos>Assentos</ContainerAssentos>
            <Footer />
        </>
    )
}

const ContainerAssentos = styled.ul`
    margin-top: 80px;
    font-family: 'Roboto', sans-serif;
`