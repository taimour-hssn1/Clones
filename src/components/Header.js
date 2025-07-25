import styled from "styled-components";
import { useEffect } from "react";
import {auth, provider} from "../firebase";
import { signInWithPopup } from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState} from "../features/user/userSlice";

const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);


    useEffect (() => {
        auth.onAuthStateChanged(async (user) => {
            if(user)
            {
                setUser(user);
                navigate('/home');
            }
        });
    }, [userName])

    const handleAuth = () => {
        if(!userName){
            signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                alert(error.message);
            });
        }
        else if (userName) {
            auth
            .signOut()
            .then (() => {
                dispatch(setSignOutState());
                navigate('/');
            })
            .catch((error) => {
                alert(error.message)
            });

        }
      };

      const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }));
      }
    return (
        <Nav> 
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>
            {
                !userName ? 
                <LogIn onClick={handleAuth}>LOGIN</LogIn> :
                <>
            <NavMenu>
                <a href="/home" >
                    <img src="/images/home-icon.svg"  alt="HOME" />
                    <span>HOME</span>
                </a>

                <a href="/home" >
                    <img src="/images/search-icon.svg"  alt="SEARCH" />
                    <span>SEARCH</span>
                </a>

                <a href="/home" >
                    <img src="/images/watchlist-icon.svg"  alt="WATCHLIST" />
                    <span>WATCHLIST</span>
                </a>

                <a href="/home" >
                    <img src="/images/original-icon.svg"  alt="ORIGINAL" />
                    <span>ORIGINAL</span>
                </a>

                <a href="/home" >
                    <img src="/images/movie-icon.svg"  alt="MOVIES" />
                    <span>MOVIES</span>
                </a>

                <a href="/home" >
                    <img src="/images/series-icon.svg"  alt="SERIES" />
                    <span>SERIES</span>
                </a>
                
            </NavMenu>
            <SignOut>
                <UserImg src={"/images/cta-logo-one.svg"} alt={userName} />
                <DropDown>
                    <span onClick={handleAuth}>Sign Out</span>
                </DropDown>
            </SignOut>
                </>
            }


        </Nav>
    
    );
};


const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding : 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 6px;
    min-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;


    a {
        display: flex;
        align-items: center;
        padding: 0 17px;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;

        
            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: '';
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left-center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                visibility: hidden;
                width: auto;
            }
        }
        
        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const LogIn = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    letter-spacing: 1.5px;
    padding: 8px 16px;
    align-items: center;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease-out;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
        cursor: pointer;
    }
`;

const UserImg = styled.img`
    height: 100%;
`;


const DropDown = styled.div`
    /* visibility:hidden; */
    position: absolute;
    top: 48px;
    right: 0px;
    background-color: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;



`;
const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg}
    {
        border-radius:50%;
        width: 100%;
        height: 100%;

    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }

    }

`;

export default Header