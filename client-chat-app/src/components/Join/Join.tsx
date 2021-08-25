import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Join = ({ chatStore }) => {
    return (
        <JoinOuterContainer>
            <JoinInnerContainer>
                <h1 >Join</h1>
                <JoiningInpoutName>
                    <input placeholder="Name" type="text" onChange={(event) => chatStore.updateName(event.target.value)} />
                </JoiningInpoutName>
                <JoiningInpoutPass>
                    <input placeholder="Room" type="text" onChange={(event) => chatStore.updateRoom(event.target.value)} />
                </JoiningInpoutPass>
                <Link onClick={e => (!chatStore.name || !chatStore.room) ? e.preventDefault() : null} to={`/chat`}>
                    <ButtonDiv>
                        <button type="submit">Sign In</button>
                    </ButtonDiv>
                </Link>
            </JoinInnerContainer>
        </JoinOuterContainer>
    )
}


export default Join;


const JoinOuterContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100vh;
    align-items: center;
    background-color: #1A1A1D;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 100%;
    }
`;

const JoinInnerContainer = styled.div`
 width: 20%;
 >h1{
    color: white;
    font-size: 2.5em;
    padding-bottom: 10px;
    border-bottom: 2px solid white;
 }
 @media (min-width: 320px) and (max-width: 480px) {
        height: 90%;
    }
 
`;

const ButtonDiv = styled.div`
>button{
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #2979FF;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    width: 100%;
    margin-top: 20px;

 }

 >button:focus {
    outline: 0;
}
`;

const JoiningInpoutName = styled.div`
>input{
    border-radius: 0;
    padding: 15px 20px;
    width: 100%;
}
`;

const JoiningInpoutPass = styled.div`
>input{
    border-radius: 0;
    padding: 15px 20px;
    width: 100%;
    margin-top: 20px;
}
`;
