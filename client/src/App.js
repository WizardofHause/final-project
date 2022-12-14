import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/visits")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/testing">
              <img src='https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg' className="App-logo" alt="Oops! ¯\_(ツ)_/¯" />
              <h1>Tom's Route!</h1>
            </Route>
            <Route path="/">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Page Count: {count}</h1>
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

<img src={logo} className="App-logo" alt="logo" />
export default App;