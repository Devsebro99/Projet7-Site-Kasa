import starLight from '../../assets/starsLight.png'
import starDark from '../../assets/starsDark.png'
import './stars.css'

function Stars({ scaleValue }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span className="starsImg" key={rangeElem.toString()}>
            {<img className="starsImg" src={starLight} alt="starLight" />}
          </span>
        ) : (
          <span className="starsImg" key={rangeElem.toString()}>
            {<img className="starsImg" src={starDark} alt="starDark" />}
          </span>
        )
      )}
    </div>
  )
}

export default Stars
