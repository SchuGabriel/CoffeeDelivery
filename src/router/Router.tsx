import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Home } from "../pages/Home/Home";
import { ShoppingCart } from "../pages/ShoppingCart/ShoppingCart.tsx"
import { OrderConfirmed } from "../pages/OrderConfirmed/OrderConfirmed.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shopping/cart" element={<ShoppingCart />} />
        <Route path="/orderConfirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  );
}
