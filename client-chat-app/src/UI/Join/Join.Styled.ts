import styled from "styled-components";

export const JoinOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1a1a1d;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

export const JoinInnerContainer = styled.div`
  width: 20%;
  > h1 {
    color: white;
    font-size: 2.5em;
    padding-bottom: 10px;
    border-bottom: 2px solid white;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    height: 90%;
  }
`;

export const ButtonDiv = styled.div`
  > button {
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #2979ff;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    width: 100%;
    margin-top: 20px;
  }

  > button:focus {
    outline: 0;
  }
`;

export const JoiningInpoutName = styled.div`
  > input {
    border-radius: 0;
    padding: 15px 20px;
    width: 100%;
  }
`;

export const JoiningInpoutPass = styled.div`
  > input {
    border-radius: 0;
    padding: 15px 20px;
    width: 100%;
    margin-top: 20px;
  }
`;
