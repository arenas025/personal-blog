import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const route = useRouter()

  console.log(route.pathname)
  return (
    <ChakraProvider>
      {route.pathname !== '/' && <Header />}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
