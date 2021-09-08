import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MessageStore from "./BusinessLogic/MessageStore";
import SessionStore from "./BusinessLogic/SessionStore";

const sessionStore = new SessionStore();
const messageStore = new MessageStore();

ReactDOM.render(
  <App messageStore={messageStore} sessionStore={sessionStore} />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
