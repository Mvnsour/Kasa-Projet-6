import './StarRating.scss';
import redStar from '/public/assets/svg/red-star.svg'
import greyStar from '/public/assets/svg/grey-star.svg'

function StarRating({ rating }) {
  const rate = [1, 2, 3, 4, 5]
  return (
    <div className="rating">
      {rate.map((rateElem) => (
        <span key={rateElem.toString()}>
          {rating >= rateElem ? (
            <img src={redStar} alt="red-star" className="rating__color"/>
          ) : (
            <img src={greyStar} alt="grey-star" className="rating__color" />
          )}
        </span>
      ))}
    </div>
  )
}

export default StarRating
