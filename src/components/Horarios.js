import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import Footer from "./Footer"

export default function Horarios() {
    const {idFilme} = useParams();

    // useEffect(() => {
    //     const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
    //     promise.then((res) => setfilmes(res.data))
    //     promise.catch((err) => console.log(err))
    // }, []);

    return (
        <>
            <ContainerHorarios>{`O filme clicado foi o ${idFilme}`}</ContainerHorarios>
            <Footer />
        </>
    )
}

const ContainerHorarios = styled.ul`
    margin-top: 80px;
    font-family: 'Roboto', sans-serif;
`