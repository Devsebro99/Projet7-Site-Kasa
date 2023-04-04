import { useState, useEffect } from 'react'
import '../../pages/apropos/apropos.css'

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
    <section className="apropos_card">
      {/* Partie du titre */}
      <aside className="apropos_titleCard">
        <h1 className="apropos_titleCard_title">{title}</h1>
        <button
          onClick={() => {
            toggleExpanded()
            vector()
          }}
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0s ease-in-out',
          }}
          className="apropos_titleCard_vector"
        ></button>
      </aside>

      {/* Partie du texte */}
      <aside
        className="apropos_titleCard_ajust"
        style={{ height: paragraphHeight }}
      >
        {isExpanded ? (
          <p className="apropos_titleCard_paraf">{description}</p>
        ) : null}
      </aside>
    </section>
  )
}

export default DropDown
