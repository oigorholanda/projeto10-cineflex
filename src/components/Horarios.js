import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import Footer from "./Footer"
import Horario from "./Horario";

export default function Horarios() {
    const { idFilme } = useParams();
    const [sessoes, setsessoes] = useState([])
    const [filme, setfilme] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        promise.then((res) => {
            setsessoes(res.data.days)
            setfilme(res.data)
            console.log(res.data)
        })
        promise.catch((err) => console.log(err))
    }, []);

    return (
        <>
            <ContainerHorarios>
                <p>Selecione o Horário</p>
                {sessoes.map((s) => <Horario key={s.id} dia={s.weekday} data={s.date} horarios={s.showtimes} />)}
            </ContainerHorarios>
            <Footer img={filme.posterURL} titulo={filme.title} />
        </>
    )
}

const ContainerHorarios = styled.div`
    font-family: 'Roboto', sans-serif;
    margin: 90px 0px 120px 0px;
    text-align: center;
    p {
        text-align: center;
        font-size: 24px;
        line-height: 28px;
        margin: 30px;
    }
`