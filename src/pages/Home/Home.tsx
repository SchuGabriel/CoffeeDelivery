import {
  DifferentiatorsIcon,
  DifferentiatorsItems,
  DifferentiatorsSection,
  HeroContainer,
  MenuContainer,
  MenuItem,
  MenuItemActions,
  MenuItemActionShopping,
  MenuItemDetails,
  MenuItemSubTitle,
  MenuItemTitle,
  MenuSection,
  MenuTitle,
  Subtitle,
  Title,
  TitleSection,
} from "./HomeStyles";
import { defaultTheme } from "../../styles/themes/default";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import HeroImage from "./image/HeroImage.png";

import ExpressoTradicional from "./image/CoffeeImage/Expresso.png";
import ExpressoAmericano from "./image/CoffeeImage/Americano.png";
import ExpressoCremoso from "./image/CoffeeImage/Expresso.png";
import ExpressoGelado from "./image/CoffeeImage/Expresso.png";
import CafeComLeite from "./image/CoffeeImage/Expresso.png";
import Latte from "./image/CoffeeImage/Expresso.png";

export function Home() {
  return (
    <div>
      <HeroContainer>
        <div>
          <TitleSection>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
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
      </HeroContainer>
      <MenuSection>
        <MenuTitle>Nossos cafés</MenuTitle>
        <MenuContainer>
          <MenuItem>
            <img src={ExpressoTradicional} alt="" />
            <MenuItemDetails>Tradicional</MenuItemDetails>
            <MenuItemTitle>Expresso Tradicional</MenuItemTitle>
            <MenuItemSubTitle>
              O tradicional café feito com água quente e grãos moídos
            </MenuItemSubTitle>
            <MenuItemActions>
              <span>9,90</span>
              <MenuItemActionShopping>
                <ShoppingCart
                  size={26}
                  color={defaultTheme["white"]}
                  weight="fill"
                />
              </MenuItemActionShopping>
            </MenuItemActions>
          </MenuItem>
          <MenuItem>
            <img src={ExpressoAmericano} alt="" />
            <MenuItemDetails>Tradicional</MenuItemDetails>
            <MenuItemTitle>Expresso Americano</MenuItemTitle>
            <MenuItemSubTitle>
              Expresso diluído, menos intenso que o tradicional
            </MenuItemSubTitle>
            <MenuItemActions>
              <span>9,90</span>
              <MenuItemActionShopping>
                <ShoppingCart
                  size={26}
                  color={defaultTheme["white"]}
                  weight="fill"
                />
              </MenuItemActionShopping>
            </MenuItemActions>
          </MenuItem>
          <MenuItem>
            <img src={ExpressoCremoso} alt="" />
            <MenuItemDetails>Tradicional</MenuItemDetails>
            <MenuItemTitle>Expresso Cremoso</MenuItemTitle>
            <MenuItemSubTitle>
              Café expresso tradicional com espuma cremosa
            </MenuItemSubTitle>
            <MenuItemActions>
              <span>9,90</span>
              <MenuItemActionShopping>
                <ShoppingCart
                  size={26}
                  color={defaultTheme["white"]}
                  weight="fill"
                />
              </MenuItemActionShopping>
            </MenuItemActions>
          </MenuItem>
          <MenuItem>
            <img src={ExpressoGelado} alt="" />
            <MenuItemDetails>Tradicional</MenuItemDetails>
            <MenuItemDetails>Gelado</MenuItemDetails>
            <MenuItemTitle>Expresso Gelado</MenuItemTitle>
            <MenuItemSubTitle>
              Bebida preparada com café expresso e cubos de gelo
            </MenuItemSubTitle>
            <MenuItemActions>
              <span>9,90</span>
              <MenuItemActionShopping>
                <ShoppingCart
                  size={26}
                  color={defaultTheme["white"]}
                  weight="fill"
                />
              </MenuItemActionShopping>
            </MenuItemActions>
          </MenuItem>
          <MenuItem>
            <img src={CafeComLeite} alt="" />
            <MenuItemDetails>Tradicional</MenuItemDetails>
            <MenuItemDetails>Com leite</MenuItemDetails>
            <MenuItemTitle>Café com leite</MenuItemTitle>
            <MenuItemSubTitle>
              Meio a meio de expresso tradicional com leite vaporizado
            </MenuItemSubTitle>
            <MenuItemActions>
              <span>9,90</span>
              <MenuItemActionShopping>
                <ShoppingCart
                  size={26}
                  color={defaultTheme["white"]}
                  weight="fill"
                />
              </MenuItemActionShopping>
            </MenuItemActions>
          </MenuItem>
          <MenuItem>
            <img src={Latte} alt="" />
            <MenuItemDetails>Tradicional</MenuItemDetails>
            <MenuItemDetails>Com leite</MenuItemDetails>
            <MenuItemTitle>Latte</MenuItemTitle>
            <MenuItemSubTitle>
              Uma dose de café expresso com o dobro de leite e espuma cremosa
            </MenuItemSubTitle>
            <MenuItemActions>
              <span>9,90</span>
              <MenuItemActionShopping>
                <ShoppingCart
                  size={26}
                  color={defaultTheme["white"]}
                  weight="fill"
                />
              </MenuItemActionShopping>
            </MenuItemActions>
          </MenuItem>
        </MenuContainer>
      </MenuSection>
    </div>
  );
}
