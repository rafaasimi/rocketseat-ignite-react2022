import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItemContainer, ItemControls } from './styles'

export function CartItem() {
  return (
    <CartItemContainer>
      <div>
        <div>
          <img
            src="coffees/expresso-tradicional.png"
            alt="Expresso Tradicional"
          />
        </div>
        <ItemControls>
          <p>Expresso Tradicional</p>

          <div className="controls-container">
            <div className="controls">
              <button type="button">
                <Minus size={14} weight="bold" />
              </button>
              <input type="text" min={1} max={99} />
              <button type="button">
                <Plus size={14} weight="bold" />
              </button>
            </div>

            <button>
              <Trash size={16} /> Remover
            </button>
          </div>
        </ItemControls>
      </div>
      <div className="price">
        <span>R$ 9,90</span>
      </div>
    </CartItemContainer>
  )
}
