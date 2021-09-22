import React from "react";
import Chat from "./UI/Chat/Chat";
import Join from "./UI/Join/Join";
import { observer } from "mobx-react";

@observer
export default class App extends React.Component<{
  sessionStore;
  messageStore;
}> {
  render() {
    return (
      <div>
        {!this.props.sessionStore.isJoin ? (
          <Join sessionStore={this.props.sessionStore} />
        ) : (
          <Chat
            sessionStore={this.props.sessionStore}
            messageStore={this.props.messageStore}
          />
        )}
      </div>
    );
  }
}

//export default App;
