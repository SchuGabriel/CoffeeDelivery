import {
  DifferentiatorsIcon,
  DifferentiatorsItems,
  HomeContainer,
  Subtitle,
  Title,
} from "./HomeStyles";
import { defaultTheme } from "../styles/themes/default";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Home() {
  return (
    <HomeContainer>
      <div>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </div>
        <div>
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
            Embalagem mantém o café intacto
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
        </div>
      </div>
      <div>
        <img src={"HeroImage"} alt="" />
      </div>
    </HomeContainer>
  );
}
