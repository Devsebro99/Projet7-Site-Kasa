import React, { useState } from 'react'
import './slideShow.css'

function ImageSlider(props) {
  const numberLength = props.loge.pictures.length
  const [currentImage, setCurrentImage] = useState(0)

  const handlePreviousClick = () => {
    const previousImage = currentImage - 1
    const imageNumber = previousImage < 0 ? numberLength - 1 : previousImage
    setCurrentImage(imageNumber)
  }

  const handleNextClick = () => {
    const nextImage = currentImage + 1
    const imageNumber = nextImage > numberLength - 1 ? 0 : nextImage
    setCurrentImage(imageNumber)
  }

  return (
    <article className="loge_image">
      <button onClick={handlePreviousClick} className="previousClick"></button>
      <img src={props.loge.pictures[currentImage]} alt="Logement" />
      <button onClick={handleNextClick} className="nextClick"></button>
    </article>
  )
}

export default ImageSlider
