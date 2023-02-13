import React from 'react'

export const Podcast = ({slug}:any) => {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src={`https://open.spotify.com/embed/track/${slug}?utm_source=generator`}
      width="100%"
      height="352"
      // frameBorder="0"
      // allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  )
}


;