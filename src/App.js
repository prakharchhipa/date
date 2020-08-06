import React from 'react';
import './App.css';
import Header from './Header'
import DateCards from './DateCards'
import Chats from './Chats'
import ChatScreen from './ChatScreen'

import SwipeButtons from './SwipeButtons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>

            <Switch>
                <Route path="/chat/:person">
                    <Header backButton="/chats" />
                    <ChatScreen />
                </Route>

                <Route path="/chats">
                    <Header backButton="/" />
                    <Chats/>
                </Route>

                <Route path="/">
                    <Header/>
                    <DateCards/>
                    <SwipeButtons/>
                </Route>

            </Switch>
        </Router>
    </div>
  );
}

export default App;
