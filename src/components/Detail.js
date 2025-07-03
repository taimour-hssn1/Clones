import styled from "styled-components";
import { useEffect, useState} from "react";
import { useParams }from 'react-router-dom';
import db from "../firebase";
import { getDoc, doc } from "firebase/firestore";


const Detail = (props) => {
    const id = useParams();
    const [detail, setDetail] = useState({});


    useEffect(() => {
        const getMovieDetail = async () => {
            const docRef = doc(db, 'movies', id.id);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                setDetail(docSnap.data());
            } else {
                console.log("No such document!");
            }
        };
    
        getMovieDetail();
    }, [id]);


    return (
        <Container>
            <BgImage>
                <img alt={detail.title} src={detail.backgroundImg} />
            </BgImage>
            <Imagetitle>
                <img src={detail.titleImg} alt={detail.title} />
            </Imagetitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </Player>

                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>trailer</span>
                    </Trailer>
                     <AddList>
                        <span></span>
                        <span></span>
                     </AddList>

                     <GroupWatch>
                        <img src="/images/group-icon.png" alt="" />
                     </GroupWatch>
                </Controls>
                <SubTitles>
                    {detail.subTitle}
                </SubTitles>

                <Description>
                    {detail.description}
                </Description>

            </ContentMeta>
        </Container>

    );
}

const Container = styled.div`
    position: relative;
    min-height: calc()(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const BgImage = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index : -1;

    img {
        width: 100vw;
        height: 100vh;

        @media(max-width:768px) {
            width: initial;
        }
    }
    
`;

const Imagetitle = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img {
        max-width: 600px;
        max-height: 200px;
    }
`;


const ContentMeta = styled.div`
max-width: 874px;
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const Player = styled.button`
    border-radius: 4px;
    padding: 0px 26px;
    height: 60px;
    margin-left: 22px;
    align-items: center;
    display: flex;
    cursor: pointer;
    justify-content: center;
    letter-spacing: 2px;
    font-size: 20px;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    color: black;
    border: None;

    img {
        width: 32px;
    }

    &:hover {
        background: rgb(198, 198, 198);   
    }

    @media(max-width: 768px) {
        height: 45px;
        padding-left: 22px;
        font-size: 12px;
        margin-left: 10px;
        img {
            width: 25px;
        }
    }
`;

const Trailer = styled.button`
    border-radius: 4px;
    padding: 0px 26px;
    height: 60px;
    margin-left: 22px;
    align-items: center;
    display: flex;
    cursor: pointer;
    justify-content: center;
    letter-spacing: 2px;
    font-size: 20px;
    text-transform: uppercase;
    background: rgba(0, 0, 0 , 0.3);
    color: rgb(249, 249, 249);
    border: 1px solid white;

    img {
        width: 32px;
    }

    &:hover {
        background: rgb(45, 45, 45);   
    }

    @media(max-width: 768px) {
        height: 45px;
        padding-left: 22px;
        font-size: 12px;
        margin-left: 10px;
        img {
            width: 25px;
        }
    }
`;


const AddList = styled.div`
    margin-left: 16px ;
    margin-right: 16px;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span {
        background-color: white;
        display: inline-block;

        &:first-child {
            height: 2px;
            transform: translate(2px, 0px) rotate(0deg);
            width: 18px;
        }
        
        &:nth-child(2) {
            height: 18px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }

    &:hover {
    background: rgb(45, 45, 45);   

    }
`;

const GroupWatch = styled.div`
    margin-left: 8px ;
    margin-right: 8px;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;


    img {
        height: 45px;
    }
    &:hover {
    background: rgb(45, 45, 45);   

    }
`;

const SubTitles = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width:768px) {
        font-size: 12px;
    }
`;
const Description = styled.div`
    color: rgb(249, 249, 249);
    font-size: 20px;
    line-height: 1.4;
    min-height: 20px;
    padding: 16px 0px;


    @media (max-width:768px) {
        font-size: 14px;
    }`;



export default Detail;