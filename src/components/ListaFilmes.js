import axios from "axios"
import { useEffect, useState } from "react";
import styled from "styled-components"
import Filme from "./Filme";
import Loading from "../assets/loading.gif"


export default function ListaFilmes() {
    const [filmes, setfilmes] = useState(undefined)

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        promise.then((res) => setfilmes(res.data))
        promise.catch((err) => console.log(err))
    }, []);

    if (filmes === undefined) {
        return (
            <ContainerLista>
                <p>Carregando...</p>
                <img src={Loading} alt="loading gif" />
            </ContainerLista>
        )
    } else {
        return (
            <ContainerLista>
                <p>Selecione o filme</p>
                <Lista>
                    {filmes.map((f) => <Filme key={f.id} title={f.title} img={f.posterURL} id={f.id} />)}
                </Lista>
            </ContainerLista>
        )
    }
}

const ContainerLista = styled.div`
    font-family: 'Roboto', sans-serif;
    margin: 90px 0px;
    text-align: center;
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
