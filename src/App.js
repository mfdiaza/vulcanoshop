import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/cart";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/cartContext";
import { Order } from './pages/checkout'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer greeting={"Bienvenido a VulcanoSHOP"} />
            }
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/tienda"
            element={
              <ItemListContainer greeting={"Bienvenido a VulcanoSHOP"} />
            }
          />
          <Route
            exact
            path="/category/:categoryID"
            element={
              <ItemListContainer greetings="Buscas algo más específico? Aquí por categorías:" />
            }
          />
          <Route
            exact
            path="/item/:productID"
            element={<ItemDetailContainer />}
          />
          <Route
            exact
            path="/order"
            element={<Order />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
