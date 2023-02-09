import Image from 'next/image';
import React from 'react'
import comfort from '/public/articlesCover/comfort.png';
import comfort_2 from '/public/articlesCover/comfort_2.png'
export const ImageComponent = ({sourceImage}:any) => {

  const imageList = [
    {
      element: comfort,
      route: '/public/articlesCover/comfort.png',
    },
    {
      element: comfort_2,
      route: '/public/articlesCover/comfort_2.png',
    },
  ]

  let source = imageList.filter(item=>item.route === sourceImage)[0].element

  return <Image style={{
    margin:'20px 0'
  }} alt={'image'} src={source} />
}
