import styled from "styled-components"

export default function Footer({ img, titulo, horario }) {
    return (
        <Cfooter>
            <img src={img} alt={titulo} />
            <div>
                <p>{titulo}</p>
                <p>{horario}</p>
            </div>


        </Cfooter>
    )
}

const Cfooter = styled.div`
    width: 100%;
    height: 117px;
    font-family: 'Roboto', sans-serif;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 2;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    padding: 10px;
    box-sizing: border-box;
    gap: 10px;

    img {
       width: 65px;
       height: 90px;
       background: #FFFFFF;
       box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
       border: 3px ridge whitesmoke;
       border-radius: 3px;
    }

    p{
        font-size: 26px;
        color: #293845;
        margin-bottom: 10px;
    }
`