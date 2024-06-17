import React from 'react'

const ImageCard = ({src, alt}) => {
  return (
    <img src={src} alt={alt} className='card__image'/>
  )
}

export default ImageCard