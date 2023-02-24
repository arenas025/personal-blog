import Link from 'next/link'
import React from 'react'
import {
  AiOutlineInstagram,
  AiFillGithub,
} from 'react-icons/ai'
import style from '../../styles/Contact.module.css'

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
      <div className={style.container}>
        <p className={style.pContainer}>
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
