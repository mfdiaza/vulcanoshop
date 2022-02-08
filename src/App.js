import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/about";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";
import { Error } from "./pages/error";
import { Tienda } from "./pages/tienda";
import { Product } from "./pages/product";
import { CartProvider } from "./context/cartContext";
import { Order } from "./pages/order"

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/vulcanoshop/">
              <Home />
            </Route>
            <Route path="/vulcanoshop/about">
              <About />
            </Route>
            <Route path="/vulcanoshop/cart">
              <Cart />
            </Route>
            <Route path="/vulcanoshop/order">
              <Order />
            </Route>
            <Route path="/vulcanoshop/tienda">
              <Tienda />
            </Route>
            <Route path="/vulcanoshop/item/:productID">
              <Product />
            </Route>
            <Route path="/vulcanoshop/category/:categoryID">
              <Tienda />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
