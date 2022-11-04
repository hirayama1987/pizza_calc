import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, Container } from '@nextui-org/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </NextUIProvider>
    )
}
