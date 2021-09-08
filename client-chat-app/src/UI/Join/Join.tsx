import { Link } from "react-router-dom";
import {
  JoinOuterContainer,
  JoiningInpoutName,
  JoinInnerContainer,
  JoiningInpoutPass,
  ButtonDiv,
} from "./Join.Styled";

const Join = ({ sessionStore }) => {
  return (
    <JoinOuterContainer>
      <JoinInnerContainer>
        <h1>Join</h1>
        <JoiningInpoutName>
          <input
            placeholder="Name"
            type="text"
            onChange={(event) => sessionStore.updateName(event.target.value)}
          />
        </JoiningInpoutName>
        <JoiningInpoutPass>
          <input
            placeholder="Room"
            type="text"
            onChange={(event) => sessionStore.updateRoom(event.target.value)}
          />
        </JoiningInpoutPass>
        <Link
          onClick={(e) =>
            !sessionStore.name || !sessionStore.room ? e.preventDefault() : null
          }
          to={`/chat`}
        >
          <ButtonDiv>
            <button type="submit">Sign In</button>
          </ButtonDiv>
        </Link>
      </JoinInnerContainer>
    </JoinOuterContainer>
  );
};

export default Join;
