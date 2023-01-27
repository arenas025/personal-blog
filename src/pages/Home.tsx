import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { getAllFilesMetadata } from '@/lib/mdx'
import { MdOutlineArticle } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { GrContact } from 'react-icons/gr'
import { IconType } from 'react-icons'
const inter = Inter({ subsets: ['latin'] })

export interface PostsProps {
  title: string
  date: string
  slug: string
}

interface QuoteProps {
  author: string
  quote: string
}

interface RouteProps {
  name: string
  route: string
  icon: IconType
}

export const routes: RouteProps[] = [
  {
    name: 'Artículos',
    route: 'articles',
    icon: MdOutlineArticle,
  },
  {
    name: 'Sobre mi',
    route: 'bio',
    icon: CgProfile,
  },
  {
    name: 'Contacto',
    route: 'contact',
    icon: GrContact,
  },
]

const Home = ({ posts }: any) => {
  const quotes: QuoteProps[] = [
    {
      author: 'Michelangelo',
      quote: 'I am still learning',
    },
    {
      author: 'B.B. King',
      quote:
        'The beautiful thing about learning is nobody can take it away from you',
    },
    {
      author: 'Howard Gardner',
      quote:
        'If you think education is expensive, try estimating the cost of ignorance',
    },
    {
      author: 'Albert Einstein',
      quote:
        'Wisdom is not a product of schooling but of the lifelong attempt to acquire it',
    },
    {
      author: 'Winston Churchill',
      quote:
        'I am always ready to learn although I do not always like being taught',
    },
    {
      author: 'Herbert Spencer',
      quote: 'The great aim of education is not knowledge but action',
    },
  ]

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * quotes.length)
    setRandomIndex(randomNum)
  }, [])

  const [RandomIndex, setRandomIndex] = useState<number>(0)

  return (
    <main className={styles.main}>
      <div className={styles.quoteContainer}>
        <p className={styles.quoteContainerName}>Sergio Arenas</p>
        <div className={styles.quoteContainerQuote}>
          <p className={styles.quoteContainerQuoteTextQuote}>
            {quotes[RandomIndex].quote}
          </p>
          <p className={styles.quoteContainerQuoteTextAuthor}>
            {quotes[RandomIndex].author}
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        {/* {posts.map((post: PostsProps) => (
          <Link key={post.slug} href={`/${post.slug}`} className={styles.card}>
            <h2>{post.title}</h2>
            <MdOutlineArticle />
          </Link>
        ))} */}
        {routes.map((route: RouteProps) => (
          <Link
            key={route.name}
            href={`/${route.route}`}
            className={styles.card}
          >
            <h2>{route.name}</h2>
            <route.icon />
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Home
