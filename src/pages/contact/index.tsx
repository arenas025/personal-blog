import { WorkingOn } from '@/components/WorkingOn'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {
  AiOutlineInstagram,
  AiFillInstagram,
  AiFillGithub,
} from 'react-icons/ai'

const Contact = () => {
  return (
    <div
      style={{
        fontFamily: 'Poppins',
        display: 'flex',
        color: 'white',
        width: '100%',
        height: '70vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'black',
          borderRadius: '10px',
          width: '90%',
          padding: '50px',
        }}
      >
        <p style={{ marginBottom: '20px' }}>
          Acá te dejo otros lugares en los que puedes conoocer un poco más de mi
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link
            href={'https://www.instagram.com/arenasergio/'}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <AiOutlineInstagram size={'100px'} fill="white" />
          </Link>
          <Link
          
            href={'https://github.com/arenas025'}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AiFillGithub size={'100px'} fill="white" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
