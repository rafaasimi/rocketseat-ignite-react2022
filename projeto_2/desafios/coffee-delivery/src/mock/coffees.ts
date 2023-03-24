export interface Coffee {
  id: number
  name: string
  description: string
  image: string
  price: number
  tags: string[]
}

export const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: 'coffees/expresso-tradicional.png',
    price: 9.9,
    tags: ['Tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: 'coffees/expresso-americano.png',
    price: 9.9,
    tags: ['Tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: 'coffees/expresso-cremoso.png',
    price: 9.9,
    tags: ['Tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: 'coffees/expresso-gelado.png',
    price: 9.9,
    tags: ['Tradicional', 'Gelado'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: 'coffees/cafe-com-leite.png',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: 'coffees/latte.png',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: 'coffees/capuccino.png',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: 'coffees/macchiato.png',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: 'coffees/mocaccino.png',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: 'coffees/chocolate-quente.png',
    price: 9.9,
    tags: ['Especial', 'Com leite'],
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: 'coffees/cubano.png',
    price: 9.9,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: 'coffees/havaiano.png',
    price: 9.9,
    tags: ['Especial'],
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: 'coffees/arabe.png',
    price: 9.9,
    tags: ['Especial'],
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: 'coffees/irlandes.png',
    price: 9.9,
    tags: ['Especial', 'Alcoólico'],
  },
]
