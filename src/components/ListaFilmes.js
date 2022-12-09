import axios from "axios"
import { useEffect, useState } from "react";
import styled from "styled-components"
import Filme from "./Filme";


export default function ListaFilmes() {
    const [filmes, setfilmes] = useState([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        promise.then((res) => setfilmes(res.data))
        promise.catch((err) => console.log(err))
    }, []);

    return (
        <ContainerLista>
            <p>Selecione o Filme</p>
            <Lista>
                {filmes.map((f) => <Filme key={f.id} title={f.title} img={f.posterURL} />)}
            </Lista>
        </ContainerLista>
    )
}

const ContainerLista = styled.div`
    font-family: 'Roboto', sans-serif;
    margin: 90px 0px;
    p {
        text-align: center;
        font-size: 24px;
        line-height: 28px;
        margin: 30px;
    }
`

const Lista = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
`
