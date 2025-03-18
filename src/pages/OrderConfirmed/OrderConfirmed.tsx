import { MapPin, Timer } from "@phosphor-icons/react";
import {
  IconContainer,
  InfoContainer,
  InfoItem,
  InfoText,
  OrderContainer,
  OrderDetails,
  OrderHeader,
  OrderImage,
} from "./OrderConfirmedStyles";
import { defaultTheme } from "../../styles/themes/default";
import { CurrencyDollar } from "@phosphor-icons/react/dist/ssr";

export function OrderConfirmed() {
  return (
    <OrderContainer>
      <OrderHeader>
        <h3>Pedido Confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </OrderHeader>
      <OrderDetails>
        <InfoContainer>
          <InfoItem>
            <IconContainer backgroundColor={defaultTheme["purple"]}>
              <MapPin size={16} color={defaultTheme.white} weight="fill" />
            </IconContainer>
            <InfoText>Entrega em rua ...</InfoText>
          </InfoItem>
          <InfoItem>
            <IconContainer backgroundColor={defaultTheme["yellow"]}>
              <Timer size={16} color={defaultTheme["white"]} weight="fill" />
            </IconContainer>
            <InfoText>Previsao de entrega...</InfoText>
          </InfoItem>
          <InfoItem>
            <IconContainer backgroundColor={defaultTheme["yellow-dark"]}>
              <CurrencyDollar  size={16} color={defaultTheme["white"]}/>
            </IconContainer>
            <InfoText>Pagamento na entrega...</InfoText>
          </InfoItem>
        </InfoContainer>
        <OrderImage>
          <img src="/deliveryBike.png" />
        </OrderImage>
      </OrderDetails>
    </OrderContainer>
  );
}
