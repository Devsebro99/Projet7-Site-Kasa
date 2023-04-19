import React, { useState } from 'react'
import './slideShow.css'

function ImageSlider(props) {
  const numberLength = props.loge.pictures.length
  const [currentImage, setCurrentImage] = useState(0)

  const PreviousClick = () => {
    const previousImage = currentImage - 1
    const imageNumber = previousImage < 0 ? numberLength - 1 : previousImage
    setCurrentImage(imageNumber)
  }

  const NextClick = () => {
    const nextImage = currentImage + 1
    const imageNumber = nextImage > numberLength - 1 ? 0 : nextImage
    setCurrentImage(imageNumber)
  }

  if (numberLength === 1) {
    return (
      <article className="loge_image">
        <img src={props.loge.pictures[currentImage]} alt="Logement" />
      </article>
    )
  } else {
    return (
      <article className="loge_image">
        <button onClick={PreviousClick} className="previousClick"></button>
        <img src={props.loge.pictures[currentImage]} alt="Logement" />
        <div className="numberPage">
          {[currentImage + 1]} / {[numberLength]}
        </div>
        <button onClick={NextClick} className="nextClick"></button>
      </article>
    )
  }
}

export default ImageSlider
