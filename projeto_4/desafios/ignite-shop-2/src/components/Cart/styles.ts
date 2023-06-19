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