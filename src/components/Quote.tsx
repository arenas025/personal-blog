import React from 'react'

export const Quote = ({
  quote,author
}:any) => {
  return (
    <div
      style={{
        width: '100%',
        borderRadius: '10px',
        padding: '10px',
        height: '100%',
        border: '1px solid gray',
      }}
    >
      <p
        style={{
          fontFamily: 'Prata',
          fontStyle: 'italic',
          color: 'black',
          fontWeight: 'bold',
        }}
      >
        {`"${quote}"`}
      </p>
      <p
        style={{
          marginTop:'5px',
          color: 'black',
          fontFamily: 'Prata',
        }}
      >
        {`- ${author}`}
      </p>
    </div>
  )
}
