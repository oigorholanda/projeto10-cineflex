import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "./Footer"
import Loading from "../assets/loading.gif"
import Assento from "./Assento";

export default function Assentos() {
    const { idSessao } = useParams();
    const [sessao, setsessao] = useState(undefined);
    const [assento, setassento] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then((res) => {
            setsessao(res.data)
            setassento(res.data.seats);
        })
        promise.catch((err) => console.log(err))
    }, []);

    if (sessao === undefined) {
        return (
            <ContainerAssentos>
                <p>Carregando...</p>
                <img src={Loading} alt="loading gif" />
            </ContainerAssentos>
        )
    } else {

        return (
            <>
                <MainAssentos>
                    <p>Selecione o(s) assento(s)</p>
                    <ContainerAssentos>
                        {assento.map((a) => <Assento key={assento.id} nome={a.name} />)}
                    </ContainerAssentos>

                <Form>
                    <label htmlFor="name">Nome do Comprador:</label>
                    <input id="name" placeholder="Digite seu nome"/>

                    <label htmlFor="cpf">CPF do Comprador:</label>
                    <input type="text" id="cpf" placeholder="Digite seu CPF" />
                    <button type="submit">Reservar Assento(s)</button>
                </Form>
                </MainAssentos>
                <Footer img={sessao.movie.posterURL} titulo={sessao.movie.title} dia={sessao.day.weekday} horario={sessao.name} />
            </>
        )
    }
}

const ContainerAssentos = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-left: 5px;
`
const MainAssentos = styled.div`
    margin: 90px 0px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    p {
        text-align: center;
        font-size: 24px;
        line-height: 28px;
        margin: 30px;
    }
`

const Form = styled.form`
    margin: 30px 0 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;
    label {
        margin-top: 15px;
    }
    input {
        width: 328px;
        height: 40px;
    }
    button {
        margin: 20px auto;
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        color: white;
    }
    
`