import React from 'react';
import styled from 'styled-components';


import ReactEmoji from 'react-emoji';

export interface MsgProps {
    message: {
        text: string;
        user: string;
        time: number;
    },
    name: string,

}


const Message: React.FC<MsgProps> = ({ message: { text, user, time }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div>
                    <SentTextRight > <p>{time} </p> <p style={{ marginLeft: '8px', color: '#5e5e5c', fontWeight: 'bold' }}> Me</p > </SentTextRight>
                    <MessageContainer >
                        <MessageBoxBlue>
                            <p > {ReactEmoji.emojify(text)} </p>
                        </MessageBoxBlue>
                    </MessageContainer>
                </div>
            )
            : (
                <div>
                    <SendText > <p>{time} </p> <p style={{ marginLeft: '5px', color: '#5e5e5c', fontWeight: 'bold' }}> {user}</p > </SendText>
                    <MessageContainerRight >
                        <MessageBoxGray >
                            <p> {ReactEmoji.emojify(text)} </p>
                        </MessageBoxGray>
                    </MessageContainerRight>
                </div>
            )
    );
}
export default Message;


const SentTextRight = styled.div`
  display: flex;
    align-items: center;
    font-family: Helvetica;
    color: #828282;
    letter-spacing: 0.3px;
    margin-right: 22px;
    margin-bottom: -13px;
    padding-right: 10px;
    justify-content: flex-end;

`;

const MessageContainer = styled.div`
   display: flex;
    justify-content: flex-end;
    padding: 0 5%;
    margin-top: 3px;
    justify-content: flex-end;

`;


const MessageBoxBlue = styled.div`
    background: #c22525;
    border-radius: 20px;
    padding: 5px 20px;
    color: white;
    display: inline-block;
    max-width: 80%;
    background: #2979FF;
    :hover{
    -webkit-transform: scale(1.06);
    -ms-transform: scale(1.06);
    transform: scale(1.06);
    transition: .3s ease;
    }
>p{
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: 1.1em;
    word-wrap: break-word;
}
`;

const SendText = styled.div`
display: flex;
    align-items: center;
    font-family: Helvetica;
    color: #828282;
    letter-spacing: 0.3px;
    margin-left: 22px;
    margin-bottom: -13px;
    padding-left: 10px;

`;

const MessageContainerRight = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 5%;
    margin-top: 3px;
    justify-content: flex-start;

`;

const MessageBoxGray = styled.div`
    background: #c22525;
    border-radius: 20px;
    padding: 5px 20px;
    color: white;
    display: inline-block;
    max-width: 80%;
    background: #F3F3F3;
    :hover{
    -webkit-transform: scale(1.06);
    -ms-transform: scale(1.06);
    transform: scale(1.06);
    transition: .3s ease;
    }
>p{
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: 1.1em;
    word-wrap: break-word;
    color: #353535;
}
`;