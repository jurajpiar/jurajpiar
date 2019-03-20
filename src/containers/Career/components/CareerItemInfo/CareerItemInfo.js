import React from 'react';
import PropTypes from 'prop-types';
import ContentItemInfo from '../../../../components/ContentItemInfo/ContentItemInfo';

import './CareerItemInfo.scss';

const CareerItemInfo = props => {
    return (
        <ContentItemInfo className={`CareerItemInfo ${props.className}`}>
            <p className='location'>{props.location}</p>
            <p className='date'>{props.date}</p>
        </ContentItemInfo>
    )
}

CareerItemInfo.propTypes = {
    className: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
}

export default CareerItemInfo
