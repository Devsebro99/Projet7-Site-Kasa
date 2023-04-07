import starLight from '../../assets/starsLight.png'
import starDark from '../../assets/starsDark.png'

function Stars({ scaleValue }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>
            {<img src={starLight} alt="starLight" />}
          </span>
        ) : (
          <span key={rangeElem.toString()}>
            {<img src={starDark} alt="starDark" />}
          </span>
        )
      )}
    </div>
  )
}

export default Stars
