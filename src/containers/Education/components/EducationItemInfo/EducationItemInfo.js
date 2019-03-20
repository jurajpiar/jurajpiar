import React from 'react';
import PropTypes from 'prop-types';
import ContentItemInfo from '../../../../components/ContentItemInfo/ContentItemInfo';


const EducationItemInfo = props => {
    return (
        <ContentItemInfo className={`EducationItemInfo ${props.className}`}>
            <p className='location'>{props.location}</p>
            <p className='date'>{props.date}</p>
        </ContentItemInfo>
    )
}

EducationItemInfo.propTypes = {
    className: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
}

export default EducationItemInfo
