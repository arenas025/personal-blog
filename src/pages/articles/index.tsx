import Image from 'next/image'
import React from 'react'
import image1 from '@/images/image-1.jpg'
import { WorkingOn } from '@/components/WorkingOn'
import { useRouter } from 'next/router'

const Index = () => {
  const routeNext = useRouter()
  return <WorkingOn route={routeNext.pathname} />
}

export default Index
