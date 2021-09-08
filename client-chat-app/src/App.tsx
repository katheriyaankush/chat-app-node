import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Chat from "./UI/Chat/Chat";
import Join from "./UI/Join/Join";

export default class App extends React.Component<{
  sessionStore;
  messageStore;
}> {
  render() {
    return (
      <div>
        <Router>
          <Route
            path="/"
            exact
            component={() => <Join sessionStore={this.props.sessionStore} />}
          />
          <Route
            path="/chat"
            component={() => (
              <Chat
                sessionStore={this.props.sessionStore}
                messageStore={this.props.messageStore}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

//export default App;
