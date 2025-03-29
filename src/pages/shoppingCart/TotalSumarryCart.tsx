import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { defaultTheme } from "../../styles/themes/default";
import { FontDefine, TotalSummary } from "./ShoppingCartStyles";

export function TotalSumarryCart() {
  const { cartData } = useCart();
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalDelivery, setTotalDelivery] = useState(0);
  const [totalSumarry, setTotalSumarry] = useState(0);

  useEffect(() => {
    let newTotalProducts = 0;
    let newTotalDelivery = 0;
    cartData.map(
      (coffee) =>
        (newTotalProducts = newTotalProducts + coffee.price * coffee.quantity)
    );
    setTotalProducts(newTotalProducts);
    setTotalDelivery(newTotalDelivery);
    setTotalSumarry(newTotalProducts + newTotalDelivery);
  }, [cartData, totalProducts]);

  return (
    <TotalSummary>
      <div>
        <span>Total de itens</span>
        <FontDefine size={1} weight={400} color={defaultTheme["base-text"]}>
          {new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          }).format(totalProducts)}
        </FontDefine>
      </div>
      <div>
        <span>Entrega</span>
        <FontDefine size={1} weight={400} color={defaultTheme["base-text"]}>
          {new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          }).format(totalDelivery)}
        </FontDefine>
      </div>
      <div>
        <FontDefine
          size={1.25}
          weight={700}
          color={defaultTheme["base-subtitle"]}
        >
          Total
        </FontDefine>
        <FontDefine
          size={1.25}
          weight={700}
          color={defaultTheme["base-subtitle"]}
        >
          {new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          }).format(totalSumarry)}
        </FontDefine>
      </div>
      <div>
        <button type="submit">CONFIRMAR PEDIDO</button>
      </div>
    </TotalSummary>
  );
}
