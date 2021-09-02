import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./componet/Login";
import Menu from './componet/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="">
        <Switch>
          <Route path="/home">
            <Menu />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
