import React from 'react'

export const Title = ({ content }: any) => {
  return (
    <p
      style={{
        textAlign: 'center',
        fontSize: '30px',
        margin: '10px 0',
        fontFamily: 'Prata',
      }}
    >
      {content}
    </p>
  )
}
