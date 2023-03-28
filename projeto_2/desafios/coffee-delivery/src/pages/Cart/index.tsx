import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { CartItem } from '../../components/CartItem'
import { OrderConfirmed } from '../../components/OrderConfirmed'
import {
  CartContainer,
  CartContent,
  CartForm,
  CartList,
  ConfirmOrder,
  PaymentAddress,
  PaymentType,
} from './styles'

export function Cart() {
  const submittedForm = false

  return (
    <div className="container">
      {!submittedForm && (
        <CartContainer>
          <CartForm>
            <h2>Complete seu pedido</h2>
            <form>
              <PaymentAddress>
                <div className="address-info">
                  <MapPinLine size={22} />
                  <div>
                    <p>Endereço de Entrega</p>
                    <span>
                      Informe o endereço onde deseja receber seu pedido
                    </span>
                  </div>
                </div>

                <div className="address-input">
                  <input id="cep" type="text" placeholder="CEP" />
                  <input id="rua" type="text" placeholder="Rua" />
                  <input id="numero" type="text" placeholder="Número" />
                  <div id="complemento">
                    <input type="text" placeholder="Complemento" />
                  </div>
                  <input id="bairro" type="text" placeholder="Bairro" />
                  <input id="cidade" type="text" placeholder="Cidade" />
                  <input id="uf" type="text" placeholder="UF" />
                </div>
              </PaymentAddress>

              <PaymentType>
                <div className="payment-info">
                  <CurrencyDollar size={22} />
                  <div>
                    <p>Pagamento</p>
                    <span>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </span>
                  </div>
                </div>

                <div className="payment-input">
                  <div>
                    <input type="radio" name="payment-radio" id="credit-card" />
                    <label htmlFor="credit-card">
                      <CreditCard size={16} />
                      Cartão de crédito
                    </label>
                  </div>
                  <div>
                    <input type="radio" name="payment-radio" id="debit-card" />
                    <label htmlFor="debit-card">
                      <Bank size={16} />
                      Cartão de débito
                    </label>
                  </div>
                  <div>
                    <input type="radio" name="payment-radio" id="money" />
                    <label htmlFor="money">
                      <Money size={16} />
                      Dinheiro
                    </label>
                  </div>
                </div>
              </PaymentType>
            </form>
          </CartForm>

          <CartList>
            <h2>Cafés selecionados</h2>

            <CartContent>
              <ul>
                <CartItem />
                <CartItem />
              </ul>

              <div className="cart-info">
                <div>
                  <span>Total de itens</span>
                  <span>R$ 29,70</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </div>
                <div className="total">
                  <span>Total</span>
                  <span>R$ 33,20</span>
                </div>
              </div>

              <ConfirmOrder type="button">Confirmar pedido</ConfirmOrder>
            </CartContent>
          </CartList>
        </CartContainer>
      )}

      {submittedForm && <OrderConfirmed />}
    </div>
  )
}
