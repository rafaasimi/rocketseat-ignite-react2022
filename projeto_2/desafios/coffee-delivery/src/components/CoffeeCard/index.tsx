import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../mock/coffees'
import {
  CoffeeCardContainer,
  CoffeeCardControls,
  CoffeeInfo,
  TagList,
} from './styles'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(coffee.price)
  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt={coffee.name} />

      <TagList>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagList>

      <CoffeeInfo>
        <h3>{coffee.name}</h3>
        <span>{coffee.description}</span>
      </CoffeeInfo>

      <CoffeeCardControls>
        <div className="price">
          <span>R$ </span>
          <strong>{priceFormatted}</strong>
        </div>

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
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </CoffeeCardControls>
    </CoffeeCardContainer>
  )
}
