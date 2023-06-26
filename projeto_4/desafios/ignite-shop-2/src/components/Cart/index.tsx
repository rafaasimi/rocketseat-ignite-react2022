import { Handbag, X } from 'phosphor-react';
import {
  BadgeCounter,
  BuyButton,
  CartIconContainer,
  CartInfoContainer,
  CartInfoQuantity,
  CartInfoTotal,
  CartItemInfo,
  CartList,
  CartListItem,
  CloseCartButton,
  ItemImageContainer,
  ShoppingCartContainer,
} from './styles';
import { useState } from 'react';

export default function Cart() {
  const [isCartActive, setIsCartActive] = useState(false);

  function openAndCloseCart() {
    setIsCartActive(!isCartActive);
  }

  return (
    <>
      <CartIconContainer onClick={openAndCloseCart}>
        <Handbag size={24} />
        <BadgeCounter>
          <span>5</span>
        </BadgeCounter>
      </CartIconContainer>
      <ShoppingCartContainer className={isCartActive ? 'active' : ''}>
        <CloseCartButton onClick={openAndCloseCart}>
          <X size={24} weight='bold'/>
        </CloseCartButton>

        <h3>Sacola de compras</h3>

        <CartList>
          <CartListItem>
            <ItemImageContainer>
              <img src="https://d1wqzb5bdbcre6.cloudfront.net/950aae187b0ba36af225b16b25c29aca2e113116f189b2e071449d2d13c36031/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878546b6c4a536a4a43576e4e776245317a4e32565166475a735833526c63335266617a4a324d3252734d4442734e456b33596e5532647a6b3459323546546a426130306a72416b67347750" alt="" />
            </ItemImageContainer>
            <CartItemInfo>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </CartItemInfo>
          </CartListItem>

          <CartListItem>
            <ItemImageContainer>
              <img src="https://d1wqzb5bdbcre6.cloudfront.net/950aae187b0ba36af225b16b25c29aca2e113116f189b2e071449d2d13c36031/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878546b6c4a536a4a43576e4e776245317a4e32565166475a735833526c63335266617a4a324d3252734d4442734e456b33596e5532647a6b3459323546546a426130306a72416b67347750" alt="" />
            </ItemImageContainer>
            <CartItemInfo>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </CartItemInfo>
          </CartListItem>

          <CartListItem>
            <ItemImageContainer>
              <img src="https://d1wqzb5bdbcre6.cloudfront.net/950aae187b0ba36af225b16b25c29aca2e113116f189b2e071449d2d13c36031/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878546b6c4a536a4a43576e4e776245317a4e32565166475a735833526c63335266617a4a324d3252734d4442734e456b33596e5532647a6b3459323546546a426130306a72416b67347750" alt="" />
            </ItemImageContainer>
            <CartItemInfo>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </CartItemInfo>
          </CartListItem>

          <CartListItem>
            <ItemImageContainer>
              <img src="https://d1wqzb5bdbcre6.cloudfront.net/950aae187b0ba36af225b16b25c29aca2e113116f189b2e071449d2d13c36031/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878546b6c4a536a4a43576e4e776245317a4e32565166475a735833526c63335266617a4a324d3252734d4442734e456b33596e5532647a6b3459323546546a426130306a72416b67347750" alt="" />
            </ItemImageContainer>
            <CartItemInfo>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </CartItemInfo>
          </CartListItem>

          <CartListItem>
            <ItemImageContainer>
              <img src="https://d1wqzb5bdbcre6.cloudfront.net/950aae187b0ba36af225b16b25c29aca2e113116f189b2e071449d2d13c36031/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878546b6c4a536a4a43576e4e776245317a4e32565166475a735833526c63335266617a4a324d3252734d4442734e456b33596e5532647a6b3459323546546a426130306a72416b67347750" alt="" />
            </ItemImageContainer>
            <CartItemInfo>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </CartItemInfo>
          </CartListItem>

          <CartListItem>
            <ItemImageContainer>
              <img src="https://d1wqzb5bdbcre6.cloudfront.net/950aae187b0ba36af225b16b25c29aca2e113116f189b2e071449d2d13c36031/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878546b6c4a536a4a43576e4e776245317a4e32565166475a735833526c63335266617a4a324d3252734d4442734e456b33596e5532647a6b3459323546546a426130306a72416b67347750" alt="" />
            </ItemImageContainer>
            <CartItemInfo>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </CartItemInfo>
          </CartListItem>

          <CartListItem>
            <ItemImageContainer>
              <img src="https://d1wqzb5bdbcre6.cloudfront.net/950aae187b0ba36af225b16b25c29aca2e113116f189b2e071449d2d13c36031/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878546b6c4a536a4a43576e4e776245317a4e32565166475a735833526c63335266617a4a324d3252734d4442734e456b33596e5532647a6b3459323546546a426130306a72416b67347750" alt="" />
            </ItemImageContainer>
            <CartItemInfo>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </CartItemInfo>
          </CartListItem>

          <CartListItem>
            <ItemImageContainer>
              <img src="https://d1wqzb5bdbcre6.cloudfront.net/950aae187b0ba36af225b16b25c29aca2e113116f189b2e071449d2d13c36031/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878546b6c4a536a4a43576e4e776245317a4e32565166475a735833526c63335266617a4a324d3252734d4442734e456b33596e5532647a6b3459323546546a426130306a72416b67347750" alt="" />
            </ItemImageContainer>
            <CartItemInfo>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </CartItemInfo>
          </CartListItem>

          <CartListItem>
            <ItemImageContainer>
              <img src="https://d1wqzb5bdbcre6.cloudfront.net/950aae187b0ba36af225b16b25c29aca2e113116f189b2e071449d2d13c36031/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878546b6c4a536a4a43576e4e776245317a4e32565166475a735833526c63335266617a4a324d3252734d4442734e456b33596e5532647a6b3459323546546a426130306a72416b67347750" alt="" />
            </ItemImageContainer>
            <CartItemInfo>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </CartItemInfo>
          </CartListItem>
        </CartList>

        <CartInfoContainer>
          <CartInfoQuantity>
            <span>Quantidade</span>
            <span>3 itens</span>
          </CartInfoQuantity>
          <CartInfoTotal>
            <span>Valor total</span>
            <strong>R$ 270,00</strong>
          </CartInfoTotal>
        </CartInfoContainer>

        <BuyButton>
          Finalizar compra
        </BuyButton>
      </ShoppingCartContainer>
    </>
  );
}
