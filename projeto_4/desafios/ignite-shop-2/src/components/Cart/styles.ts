import { styled } from "../../styles";

export const CartIconContainer = styled('button', {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '3rem',
  height: '3rem',
  background: '$gray800',
  borderRadius: 6,
  padding: 12,
  border: 'none',

  '&:hover': {
    cursor: 'pointer',
  },

  svg: {
    color: '$gray500',
  }
})
  
export const BadgeCounter = styled('span', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$white',
  fontWeight: 'bold',

  width: '1.75rem',
  height: '1.75rem',
  right: '-15%',
  top: '-15%',
  background: '$green500',
  borderRadius: '50%',
  border: '3px solid $gray900',
  backgroundClip: 'padding-box',

  span: {
    fontSize: '0.875rem',
    lineHeight: 0,
  }
})

export const ShoppingCartContainer = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  
  position: 'fixed',
  zIndex: 999,
  top: 0,
  right: 0,
  width: 0,
  opacity: 0,
  padding: '1.5rem',
  maxHeight: '100vh',
  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  transition: '0.2s',

  '&.active': {
    width: '480px',
    opacity: 1,
  },

  h3: {
    margin: '1.5rem 0',
    color: '$gray100',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  
})

export const CloseCartButton = styled('button', {
  background: 'none',
  border: 'none',
  display: 'block',
  marginLeft: 'auto',
  
  svg: {
    color: '$gray500',
  },

  '&:hover': {
    cursor: 'pointer'
  },

  '&:hover svg': {
    color: '$gray300',
  },
})

export const CartList = styled('ul', {
  flex: 1,
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  listStyle: 'none',

  '&::-webkit-scrollbar': {
    width: '5px',
  },
    
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '4px',
    background: '$green500',
  }
  

})

export const CartListItem = styled('li', {
  display: 'flex',
  gap: '1.25rem',


})

export const ItemImageContainer = styled('div', {
  width: '100px',
  height: '95px',
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    width: '100%',
    objectFit: 'cover',
  }
})


export const CartItemInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  span: {
    color: '$gray300',
    fontSize: '1.125rem',
    marginBottom: 4,
  },

  strong: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '$gray100',
    marginBottom: 8,
  },

  button: {
    background: 'none',
    border: 'none',

    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$green500',

    '&:hover': {
      color: '$green300',
      cursor: 'pointer',
    }
  },

})

export const CartInfoContainer = styled('div', {
  marginTop: '2rem',
  marginBottom: '3.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const CartInfoQuantity = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CartInfoTotal = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontWeight: 'bold',

  strong: {
    fontSize: 24
  }
})

export const BuyButton = styled('button', {
    padding: '1.25rem',
    color: '$white',
    backgroundColor: '$green500',
    border: 'none',
    borderRadius: 8,
    fontSize: '1.125rem',
    marginBottom: '3rem',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '$green300',
    }
})