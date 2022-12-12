import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Filme({ title, img, id }) {
    return (
        <Link to={`/sessoes/${id}`}>
            <Movie>
                <img src={img} alt={title} />
            </Movie>
        </Link>
    )
}

const Movie = styled.li`
    img {
       width: 150px;
       height: 214px;
       background: #FFFFFF;
       box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
       border: 8px ridge whitesmoke;
       border-radius: 3px;
       &:hover {
        cursor: pointer;
        border-color: #E8833A;
       }
    }
`