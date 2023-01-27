'use-client'

import React, { useEffect, useRef, useState } from 'react'
import { background, Box, Flex, Spacer } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { routes } from '@/pages/Home'
import { relative } from 'path'

export const Header = () => {
  const routeNext = useRouter()

  const [HeaderVisible, setHeaderVisible] = useState<boolean>(true)

  const headerRef = useRef<any>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting)
        console.log()
      },
      {
        threshold: 0.2,
      },
    )
    console.log('HeaderVisible', HeaderVisible),
      observer.observe(headerRef.current)
  }, [HeaderVisible])
  return (
    <>
      <div
        ref={headerRef}
        style={{
          position: 'relative',
          zIndex: 2,
          height: '50px',
          width: '10px',
          background: 'transparent',
        }}
      ></div>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor={'black'}
        opacity={HeaderVisible ? 1 : 0.8}
        p={'5px'}
        position="fixed"
        top="0px"
        transitionProperty={'all'}
        transitionDuration="200ms"
        width={'100vw'}
        pr={'15px'}
        height="50px"
        gap={'5px'}
      >
        <Link href={'/'}>
          <Box fontFamily={'Prata'} fontSize="13px" color="white">
            Sergio Arenas
          </Box>
        </Link>
        <Spacer />
        {routes.map((route) => (
          <Link href={route.route} key={route.name}>
            <Box
              color={
                `/${route.route}` === routeNext.pathname ? 'white' : '#9f9f9f'
              }
              fontSize={'11px'}
              p={0}
              borderBottom={
                `/${route.route}` === routeNext.pathname
                  ? '1px solid white'
                  : '1px solid black'
              }
              transitionProperty={'all'}
              transitionDuration={'200ms'}
              textAlign="center"
              width={'100%'}
              fontFamily={'Poppins'}
              marginLeft="10px"
              _hover={{ borderBottom: '1px solid white' }}
            >
              {route.name}
            </Box>
          </Link>
        ))}
      </Flex>
    </>
  )
}
