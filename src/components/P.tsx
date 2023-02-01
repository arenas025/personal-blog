import React from 'react'

export const P = ({ children }: any) => {
  return (
    <p
      style={{
        textAlign: 'justify',
        fontFamily: 'Poppins',
        lineHeight: '25px',
        padding: '0 10px',
        fontSize: '17px',
      }}
    >
      {children}
    </p>
  )
}
