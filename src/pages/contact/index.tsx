import { WorkingOn } from '@/components/WorkingOn'
import { useRouter } from 'next/router'
import React from 'react'

const Contact = () => {
  const routeNext = useRouter()
  return <WorkingOn route={routeNext.pathname} />
}

export default Contact
