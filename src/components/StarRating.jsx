import './StarRating.scss';
import redStar from '/public/assets/svg/red-star.svg'
import greyStar from '/public/assets/svg/grey-star.svg'

function StarRating({ rating }) {
  const rate = [1, 2, 3, 4, 5]
  return (
    <div className="rating-container">
      {rate.map((rateElem) => (
        <span key={rateElem.toString()}>
          {rating >= rateElem ? (
            <img src={redStar} />
          ) : (
            <img src={greyStar} alt="grey-star" className="star-rate" />
          )}
        </span>
      ))}
    </div>
  )
}

export default StarRating
