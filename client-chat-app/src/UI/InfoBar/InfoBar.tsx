import React from "react";
import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";
import {
  InfoBarMain,
  LeftInnerContainer,
  RightInnerContainer,
} from "./InfoBar.Styled";

export interface InfoBarProps {
  room: any;
}
const InfoBar: React.FC<InfoBarProps> = ({ room }) => (
  <InfoBarMain>
    <LeftInnerContainer>
      <img src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </LeftInnerContainer>
    <RightInnerContainer>
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </RightInnerContainer>
  </InfoBarMain>
);

export default InfoBar;
