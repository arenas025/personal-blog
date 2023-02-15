import React from 'react'
import { Progress } from '@chakra-ui/react'

export const ProgressBar = ({value}:any) => {
  console.log('value', Math.ceil(value))
  return (
  <div style={{width:'100vw', position:'fixed', border:'1px solid black'}}>
  <Progress colorScheme='linkedin' style={{height:'6px', backgroundColor:'white'}}  value={Math.ceil(value)} />
  </div>)
}
