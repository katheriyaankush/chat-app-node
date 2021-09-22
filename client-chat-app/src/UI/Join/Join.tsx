import { Link } from "react-router-dom";
import {
  JoinOuterContainer,
  JoiningInpoutName,
  JoinInnerContainer,
  JoiningInpoutPass,
  ButtonDiv,
} from "./Join.Styled";
import JoinViewModel from "./JoinViewModel";

let joinViewModel: JoinViewModel;
const Join = ({ sessionStore }) => {
  joinViewModel = new JoinViewModel(sessionStore);
  return (
    <JoinOuterContainer>
      <JoinInnerContainer>
        <h1>Join</h1>
        <JoiningInpoutName>
          <input
            placeholder="Name"
            type="text"
            onChange={(event) => joinViewModel.updateName(event)}
          />
        </JoiningInpoutName>
        <JoiningInpoutPass>
          <input
            placeholder="Room"
            type="text"
            onChange={(event) => joinViewModel.updateRoom(event)}
          />
        </JoiningInpoutPass>

        <ButtonDiv>
          <button onClick={() => joinViewModel.gotoChatRoom()}>Sign In</button>
        </ButtonDiv>
      </JoinInnerContainer>
    </JoinOuterContainer>
  );
};
export default Join;
