import React from 'react'

function Rating({ rating }) {
  const stars = []

  // Ajouter des étoiles dans le tableau "stars"
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>&#9733;</span>)
  }

  // Rendre le tableau d'étoiles
  return <div>{stars}</div>
}

export default Rating
