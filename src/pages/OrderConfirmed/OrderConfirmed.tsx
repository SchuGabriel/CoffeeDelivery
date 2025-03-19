import {
  OrderContainer,
  OrderDetails,
  OrderHeader,
  OrderImage,
} from "./OrderConfirmedStyles";

import { InfoSection } from "./InfoContainer";

export function OrderConfirmed() {
  return (
    <OrderContainer>
      <OrderHeader>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </OrderHeader>
      <OrderDetails>
        <InfoSection />
        <OrderImage>
          <img src="/deliveryBike.png" />
        </OrderImage>
      </OrderDetails>
    </OrderContainer>
  );
}
