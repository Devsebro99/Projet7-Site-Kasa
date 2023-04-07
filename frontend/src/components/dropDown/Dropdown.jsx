import { useState, useEffect } from 'react'
import './dropDown.css'

function DropDown({ title, description }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [paragraphHeight, setParagraphHeight] = useState(0)

  useEffect(() => {
    if (isExpanded) {
      setParagraphHeight('auto')
    } else {
      setParagraphHeight(0)
    }
  }, [isExpanded])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const [rotation, setRotation] = useState(0)
  const vector = () => {
    setRotation(rotation + 180)
  }

  return (
    <section className="dropdown_card">
      {/* Partie du titre */}
      <aside className="dropdown_titleCard">
        <h2 className="dropdown_titleCard_title">{title}</h2>
        <button
          onClick={() => {
            toggleExpanded()
            vector()
          }}
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0s ease-in-out',
          }}
          className="dropdown_titleCard_vector"
        ></button>
      </aside>

      {/* Partie du texte */}
      <aside
        className="dropdown_titleCard_ajust"
        style={{ height: paragraphHeight }}
      >
        {isExpanded ? (
          <p className="dropdown_titleCard_paraf">{description}</p>
        ) : null}
      </aside>
    </section>
  )
}

export default DropDown
