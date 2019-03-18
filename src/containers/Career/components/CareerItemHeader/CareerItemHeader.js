import React from 'react';
import PropTypes from 'prop-types';

import './CareerItemHeader.scss';
import ContentItemHeader from '../../../../components/ContentItemHeader/ContentItemHeader';

const CareerItemHeader = props => {
    return (
        <ContentItemHeader className={`CareerItemHeader ${props.className || ''}`}>
            <p className='companyName'>{props.companyName}</p>
            <p className='jobTitle'>{props.jobTitle}</p>
        </ContentItemHeader>
    )
}

CareerItemHeader.propTypes = {
    className: PropTypes.string,
    companyName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
}

export default CareerItemHeader
