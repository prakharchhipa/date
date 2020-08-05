import React from 'react';
import './App.css';
import Header from './Header'
import DateCards from './DateCards'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        {/* Header */}
        <Header/>
        <Router>
            <Switch>
                <Route path="/chat">
                    <h1>I'm chat page</h1>
                </Route>
                <Route path="/">
                    <DateCards/>
                </Route>

            </Switch>



            {/* Cards */}


            {/* Footer */}


            {/* Chat List Screen */}


            {/* Individual Chat Screen */}
        </Router>
    </div>
  );
}

export default App;
