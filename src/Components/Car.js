import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import defaultImg from '../images/car-1.jpeg'

const Car = ({ car }) => {

  const { name, slug, images, price } = car;
  return (
    <article className="car">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single car" />
        <div className="price-top">
          <h6>₹{price}</h6>
        </div>
        <Link to={`/car/${slug}`} className="btn-primary room-link">Features</Link>
      </div>
      <p className="car-info">{name}</p>
    </article>
  )
}


Car.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  })
}



export default Car;

