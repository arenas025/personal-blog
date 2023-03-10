import Head from 'next/head'
import { getAllFilesMetadata } from '@/lib/mdx'
import Home, { PostsProps } from './Home'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
// import favicon from '/public/icons8-circled-s-96.ico'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  const route = useRouter()
  return (
    <>
      <Head>
        <title>Sergio Arenas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}


