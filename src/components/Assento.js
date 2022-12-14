import styled from "styled-components"

export default function Assento({nome}) {


    return (
        <CAssento>
            {nome}
        </CAssento>

    )
}

const CAssento = styled.div`
    width: 25px;
    height: 25px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`
