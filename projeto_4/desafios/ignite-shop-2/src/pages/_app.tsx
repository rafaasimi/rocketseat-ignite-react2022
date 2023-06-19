import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app';
import Image from 'next/image';
import Head from 'next/head';

import imgFavicon from '../assets/logo.svg'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
        <Head>
          <title>Ignite Shop</title>
          <link rel="shortcut icon" href='/favicon.png' type="image/png" />
        </Head>

        <Header>
          <Image src={logoImg} alt="Ignite Shop" />
        </Header>
      <Component {...pageProps} />
    </Container>
  )
}
