import React from 'react'
import Image from 'next/image'
import image1 from '@/images/image-1.jpg'
import { routes } from '@/pages/Home'
import { useRouter } from 'next/router'

export const WorkingOn = ({ route }: any) => {
  console.log('route', route)

  return (
    <div
      style={{
        height: '85vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 15,
        fontSize: 20,
        fontFamily: 'Prata',
        marginTop: 0,
      }}
    >
      <p>
        Hola, en este momento estoy construyendo la sección de{' '}
        <b> {routes.find((item) => `/${item.route}` === route)!.name} </b>
      </p>
      <Image src={image1} alt="Image-construction" width={350} height={350} />
      <p>Gracias por tener interés</p>
      <br />
      <p>Te prometo que valdrá la pena</p>
    </div>
  )
}
