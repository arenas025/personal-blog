import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div>
      <Image
        src="/public/image-3.png"
        alt="Image-construction"
        width={100}
        height={100}
      />
      {/* <img src="/public/undraw_building_websites_i78t.png" /> */}
    </div>
  )
}

export default index
