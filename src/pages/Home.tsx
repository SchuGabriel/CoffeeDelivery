import {
  DifferentiatorsIcon,
  DifferentiatorsItems,
  DifferentiatorsSection,
  HomeContainer,
  Subtitle,
  Title,
  TitleSection,
} from "./HomeStyles";
import { defaultTheme } from "../styles/themes/default";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import HeroImage from "./image/HeroImage.png";

export function Home() {
  return (
    <HomeContainer>
      <div>
        <TitleSection>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </TitleSection>
        <DifferentiatorsSection>
          <DifferentiatorsItems>
            <DifferentiatorsIcon color={defaultTheme["yellow-dark"]}>
              <ShoppingCart
                size={16}
                color={defaultTheme.white}
                weight="fill"
              />
            </DifferentiatorsIcon>
            <p>Compra simples e segura</p>
          </DifferentiatorsItems>
          <DifferentiatorsItems>
            <DifferentiatorsIcon color={defaultTheme["base-text"]}>
              <Package size={16} color={defaultTheme.white} weight="fill" />
            </DifferentiatorsIcon>
            <p>Embalagem mantém o café intacto</p>
          </DifferentiatorsItems>
          <DifferentiatorsItems>
            <DifferentiatorsIcon color={defaultTheme["yellow"]}>
              <Timer size={16} color={defaultTheme.white} weight="fill" />
            </DifferentiatorsIcon>
            <p>Entrega rápida e rastreada</p>
          </DifferentiatorsItems>
          <DifferentiatorsItems>
            <DifferentiatorsIcon color={defaultTheme["purple"]}>
              <Coffee size={16} color={defaultTheme.white} weight="fill" />
            </DifferentiatorsIcon>
            <p>O café chega fresquinho até você</p>
          </DifferentiatorsItems>
        </DifferentiatorsSection>
      </div>
      <div>
        <img src={HeroImage} alt="" />
      </div>
    </HomeContainer>
  );
}
