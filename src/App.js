import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import Detail from "./components/Detail";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/Productlist">
          <ProductList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Detail />
      </Switch>
    </div>
  );
}

export default App;
