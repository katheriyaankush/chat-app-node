import React from 'react';
import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';
import styled from 'styled-components';


export interface InfoBarProps {
    room: any
}
const InfoBar: React.FC<InfoBarProps> = ({ room }) => (
    <InfoBarMain>
        <LeftInnerContainer>
            <img src={onlineIcon} alt="online icon" />
            <h3>{room}</h3>
        </LeftInnerContainer>
        <RightInnerContainer>
            <a href="/"><img src={closeIcon} alt="close icon" /></a>
        </RightInnerContainer>
    </InfoBarMain>
);

export default InfoBar;

const InfoBarMain = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2979FF;
    border-radius: 4px 4px 0 0;
    height: 60px;
    width: 100%;

`;

const LeftInnerContainer = styled.div`
   flex: 0.5;
    display: flex;
    align-items: center;
    margin-left: 5%;
    color: white;
    >img{ 
        margin-right: 5%;
    }
`;

const RightInnerContainer = styled.div`
 display: flex;
    flex: 0.5;
    justify-content: flex-end;
    margin-right: 5%;
`;

