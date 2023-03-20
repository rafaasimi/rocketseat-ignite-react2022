import { NavLink } from 'react-router-dom'
import { CartButton, HeaderContainer, Location } from './styles'

import logoImg from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>

      <nav>
        <Location>
          <MapPin size={22} weight="fill" />
          Araras, SP
        </Location>

        <NavLink to="/cart">
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            <div>3</div>
          </CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
