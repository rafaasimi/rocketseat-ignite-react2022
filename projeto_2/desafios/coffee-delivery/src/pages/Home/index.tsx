import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  CoffeeListContainer,
  MainBanner,
  MainBannerContainer,
  MainBannerItems,
} from './styles'
import bannerCoffeeImg from '../../assets/banner-coffee.png'
import { CoffeeCard } from '../../components/CoffeeCard'
import { coffees } from '../../mock/coffees'

export function Home() {
  return (
    <>
      <MainBanner>
        <div className="container">
          <MainBannerContainer>
            <div>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>

              <MainBannerItems>
                <div>
                  <div className="">
                    <ShoppingCart size={16} weight="fill" />
                  </div>
                  <span>Compra simples e segura</span>
                </div>

                <div>
                  <div>
                    <Package size={16} weight="fill" />
                  </div>
                  <span>Embalagem mantém o café intacto</span>
                </div>

                <div>
                  <div>
                    <Timer size={16} weight="fill" />
                  </div>
                  <span>Entrega rápida e rastreada</span>
                </div>

                <div>
                  <div>
                    <Coffee size={16} weight="fill" />
                  </div>
                  <span>O café chega fresquinho até você</span>
                </div>
              </MainBannerItems>
            </div>

            <div>
              <img src={bannerCoffeeImg} alt="" />
            </div>
          </MainBannerContainer>
        </div>
      </MainBanner>

      <div className="container">
        <CoffeeListContainer>
          <h2>Nossos cafés</h2>

          <div className="coffee-list">
            {coffees.map((coffee) => {
              return <CoffeeCard key={coffee.id} coffee={coffee} />
            })}
          </div>
        </CoffeeListContainer>
      </div>
    </>
  )
}
