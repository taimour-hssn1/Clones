import styled from "styled-components";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movies/movieSlice";


const NewDisney = (props) => {

    const movies = useSelector(selectNewDisney);
    // console.log("Movies from Redux:", movies); 

    return (
        <Container>
            <h4>Latest on Disney+</h4>
            <Content>
                {
                    movies && movies.map((movie, key) => (
                        <Wrap key={key}>
                            {movie.id}
                            <Link to={'/detail/' + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    );
}

const Container = styled.div`
    padding: 0px 0px 26px;

`;
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width:768px) {
        grid-template-columns: repeat(2, min-max(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid white;

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: white;
    }

`;
export default NewDisney;