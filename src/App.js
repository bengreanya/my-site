import logo from './logo.svg';
import './App.css';
import Header from './header/Header.js';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './main/Main.js';
import Reeds from './reeds/Reeds.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/main" component={Main} />
        <Route exact path="/reeds" component={Reeds} />
        <Route exact path="*">
          <Redirect to="/main" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
