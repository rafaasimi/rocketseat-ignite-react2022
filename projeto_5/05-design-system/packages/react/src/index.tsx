import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray500',
  borderRadius: '$md',
  padding: '$4',
  height: '$4',
})

export function App() {
  return <Button>Hello World</Button>
}
