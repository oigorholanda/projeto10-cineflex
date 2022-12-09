import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
    return (
        <Link to='/'>
        <Title>CINEFLEX</Title>
        </Link>
    )
}

const Title = styled.h1`
    width: 100%;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 40px;
    background-color:#C3CFD9;
    color: #E8833A;
`