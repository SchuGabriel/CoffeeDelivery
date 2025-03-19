import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { IconContainer, InfoContainer, InfoItem, InfoText } from "./OrderConfirmedStyles";
import { defaultTheme } from "../../styles/themes/default";

export function InfoSection() {
  return (
    <InfoContainer>
      <InfoItem>
        <IconContainer backgroundColor={defaultTheme["purple"]}>
          <MapPin size={16} color={defaultTheme.white} weight="fill" />
        </IconContainer>
        <InfoText>
          Entrega em <span>Rua João Daniel Martinelli, 102</span>
          <br />
          Farrapos - Porto Alegre, RS
        </InfoText>
      </InfoItem>
      <InfoItem>
        <IconContainer backgroundColor={defaultTheme["yellow"]}>
          <Timer size={16} color={defaultTheme["white"]} weight="fill" />
        </IconContainer>
        <InfoText>
          Previsão de entrega
          <br />
          <span>20 min - 30 min</span>
        </InfoText>
      </InfoItem>
      <InfoItem>
        <IconContainer backgroundColor={defaultTheme["yellow-dark"]}>
          <CurrencyDollar size={16} color={defaultTheme["white"]} />
        </IconContainer>
        <InfoText>
          Pagamento na entrega
          <br />
          <span>Cartão de Crédito</span>
        </InfoText>
      </InfoItem>
    </InfoContainer>
  );
}
