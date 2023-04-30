import React from 'react'
import { ImFacebook, ImWhatsapp } from 'react-icons/im'
import { P } from './P'

interface ShareWithProps {
  slug: string
}

export const ShareWith = ({ slug }: ShareWithProps) => {
  return (
    <div
      style={{
        background: 'black',
        marginTop: '20px',
        display: 'flex',
        paddingTop: '10px',
        flexDirection: 'column',
      }}
    >
      <p style={{ textAlign: 'center', fontFamily: 'Prata', color: 'white' }}>
        Si te gustó este escrito, puedes compartirlo
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '10px',
          flexDirection: 'row',
        }}
      >
        <a
          style={{ display: 'flex', justifyContent: 'center' }}
          href={`https://api.whatsapp.com/send?text=Mira%20este%20articulo%20de%20Sergio%20Arenas%20,%20te%20podria%20interesar%20https://sergioarenas.netlify.app/articles/${slug}`}
        >
          <div
            style={{
              padding: '20px',
              background: '#36d672',
              width: '90%',
              height: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              lineBreak: 'normal',
              borderRadius: '20px',
              display: 'flex',
            }}
          >
            <ImWhatsapp
              style={{ marginRight: '10px' }}
              fill="white"
              size={'30px'}
            />
            <p
              style={{
                fontFamily: 'Poppins',
                color: 'white',
                fontSize: '10px',
              }}
            >
              Compartir en Whatsapp
            </p>
          </div>
        </a>

        <a
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsergioarenas.netlify.app%2Farticles%2F`}
          style={{ display: 'flex', justifyContent: 'center' }}
          rel="noreferrer"
        >
          <div
            style={{
              padding: '20px',
              background: '#0e8ef1',
              width: '90%',
              height: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              lineBreak: 'normal',
              borderRadius: '20px',
              display: 'flex',
            }}
            data-href={`https://sergioarenas.netlify.app/articles/`}
            data-layout="button_count"
            data-size="small"
          >
            <ImFacebook
              style={{ marginRight: '10px' }}
              fill="white"
              size={'30px'}
            />
            <p
              style={{
                fontFamily: 'Poppins',
                color: 'white',
                fontSize: '10px',
              }}
            >
              Compartir en Facebook
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

// https://developers.facebook.com/docs/plugins/share-button?locale=es_ES#
