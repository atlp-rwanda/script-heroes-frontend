import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index,description, title, img } = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={img} alt={title} className='service-img' />
            <div className="details">
                <h1>{title}</h1>
                <p className="description">
                    {description}
                </p>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;