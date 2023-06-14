import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import { stripe } from '../../lib/stripe';
import Stripe from 'stripe';
import { FormatCurrency } from '../../utils/format-currency';
import { useRouter } from 'next/router';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();

  if(isFallback) {
    return <p>Carregando...</p>
  }

  function handleBuyProduct() {
    console.log(product.defaultPriceId)
  }


  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt=''/>
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>
      
        <button onClick={handleBuyProduct}>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Buscar os produtos mais vendidos / acessados

  return {
    paths: [
      {
        params: {
          id: 'prod_O4RJhYVF3z91UV'
        }
      }
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: FormatCurrency(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}