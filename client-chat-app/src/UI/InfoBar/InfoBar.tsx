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
  error: boolean;
}
const InfoBar: React.FC<InfoBarProps> = ({ room, error }) => (
  <InfoBarMain>
    <LeftInnerContainer>
      {!error ? (
        <>
          <img src={onlineIcon} alt="online icon" />
          <h3>{room} </h3>
        </>
      ) : (
        <p>Username already exists</p>
      )}
    </LeftInnerContainer>
    <RightInnerContainer>
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </RightInnerContainer>
  </InfoBarMain>
);

export default InfoBar;
