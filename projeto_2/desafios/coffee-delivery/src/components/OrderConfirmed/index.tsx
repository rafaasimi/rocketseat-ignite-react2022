import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderConfirmedContainer, OrderInfo, OrderInfoItem } from './styles'

import deliveryManImg from '../../assets/deliveryman.svg'

export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <OrderInfo>
          <div>
            <OrderInfoItem iconColor="purple-300">
              <div>
                <MapPin size={16} weight="fill" />
              </div>
              <span>
                Entrega em <strong>Rua Dr. Fábio Fachini, 666</strong>
                <br />
                Araras, SP
              </span>
            </OrderInfoItem>

            <OrderInfoItem iconColor="yellow-300">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            </OrderInfoItem>

            <OrderInfoItem iconColor="yellow-500">
              <div>
                <CurrencyDollar size={16} />
              </div>
              <span>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </span>
            </OrderInfoItem>
          </div>
        </OrderInfo>
      </div>

      <div>
        <img src={deliveryManImg} alt="" />
      </div>
    </OrderConfirmedContainer>
  )
}
