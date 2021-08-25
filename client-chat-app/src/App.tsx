import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';


export default class App extends React.Component<{ chatStore }> {


  render() {
    return (
      <div>
        <Router>
          <Route path='/' exact component={() => (<Join chatStore={this.props.chatStore} />)} />
          <Route path='/chat' component={() => (<Chat chatStore={this.props.chatStore} />)} />
        </Router>
      </div>
    );
  }
}

//export default App;