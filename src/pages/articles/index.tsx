import Image from 'next/image'
import React from 'react'
import image1 from '@/images/image-1.jpg'
import { WorkingOn } from '@/components/WorkingOn'
import { useRouter } from 'next/router'
import { PostsProps, routes } from '../Home'
import { getAllFilesMetadata } from '@/lib/mdx'
import image from '/public/images/image-1.jpg'
import image2 from '/public/images/descarga.png'
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import { BiRightArrowAlt } from 'react-icons/bi'
import Link from 'next/link'

interface articleMetadata {
  title: string
  slug: String
  date: string
  language: string
  description: string
  image: string
}

const imagesList = [
  {
    element: image,
    route: '/public/images/image-1.jpg',
  },
  {
    element: image2,
    route: '/public/images/descarga.jpg',
  },
]

const Index = ({ posts }: any) => {
  return (
    <Flex direction={'column'} p="5px" gap="15px">
      {posts.map((item: articleMetadata) => (
        <Link key={item.title} href={`/articles/${item.slug}`}>
          <Card
            onClick={() => {}}
            key={item.title}
            direction={{ base: 'row', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            height={'130px'}
            // objectFit="contain"
            objectPosition="center"
            p="3px"
          >
            <Stack>
              <CardBody p="0px" pl="10px" display="flex" flexDirection="column">
                <Heading
                  p="0px"
                  width="auto"
                  borderBottom={'1px solid black'}
                  fontSize="13px"
                  fontFamily="Prata"
                  style={{ paddingBottom: '2px' }}
                >
                  {item.title}
                </Heading>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: '10px',
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ width: '140%' }}>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: 'Poppins',
                        fontSize: '10px',
                        textAlign: 'center',
                        fontWeight: 'bolder',
                      }}
                    >
                      {item.date}
                    </p>

                    <Image
                      style={{
                        borderRadius: '5px',
                        height: '70px',
                        objectFit: 'cover',
                        position: 'relative',
                        width: '100px',
                      }}
                      src={
                        imagesList.filter(
                          (photo) => photo.route === item.image,
                        )[0].element
                      }
                      alt="Cover image"
                    />
                    {/* <div style={{ display: 'flex', marginTop: '5px' }}>
                      <p
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '10px',
                          fontWeight: 'bolder',
                        }}
                      >
                        Leer artículo
                      </p>
                      <BiRightArrowAlt
                        size={13}
                        style={{
                          marginTop: '2px',
                          marginLeft: '3px',
                        }}
                      />
                    </div> */}
                  </div>
                  <Text
                    pl={'10px'}
                    pr={'5px'}
                    fontFamily="Poppins"
                    fontSize="smaller"
                    lineHeight={'14.5px'}
                    textAlign="justify"
                  >
                    {item.description}
                  </Text>
                  {/* <p style={{ margin: '0px', fontSize: '10px' }}>{item.date}</p> */}
                </div>
              </CardBody>

              <CardFooter
                p={0}
                pl="10px"
                // borderBottom={'1px solid black'}
                height="fit-content"
                display={'flex'}
                alignItems="center"
                style={{ margin: '0px', width: 'fit-content' }}
                // onClick={}
              ></CardFooter>
            </Stack>
          </Card>
        </Link>
      ))}
    </Flex>
  )
}

export default Index

export const getStaticProps = async () => {
  const posts: PostsProps[] = await getAllFilesMetadata()

  return {
    props: { posts },
  }
}




//  src={
//               imagesList.filter((photo) => photo.route === item.image)[0]
//                 .element
//             }