import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import Original from "./Original";
import Trending from "./Trending";
import NewDisney from "./NewDisney";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import db from '../firebase';
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, onSnapshot } from "firebase/firestore";


const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "movies"),
            (snapshot) => {
                let recommend = [];
                let original = [];
                let newDisney = [];
                let trending = [];

                snapshot.docs.forEach((doc) => {
                    switch (doc.data().type) {
                        case 'recommend': 
                            recommend.push({id: doc.id, ...doc.data()});
                            break; 
                        case 'original': 
                            original.push({id: doc.id, ...doc.data()});
                            break;
                        case 'new': 
                            newDisney.push({id: doc.id, ...doc.data()});
                            break;
                        case 'trending': 
                            trending.push({id: doc.id, ...doc.data()});
                            break;
                        default:
                            break;
                    }
                });

                dispatch(setMovies({
                    recommend: recommend,
                    newDisney: newDisney, 
                    original: original, 
                    trending: trending
                }));
            }
        );
        return unsubscribe;
    }, [userName, dispatch]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <Original />
            <Trending />
            <NewDisney />
        </Container>
    );
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top : 72px;
    padding: 0 calc(3.5vw + 5px);
    
    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed; 
        content: "";
        position: absolute;
        inset: 0px;
        opacity : 1;
        z-index: -1;

    }
`;

export default Home;