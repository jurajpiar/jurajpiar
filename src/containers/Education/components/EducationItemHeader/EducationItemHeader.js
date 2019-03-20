import React from 'react';
import PropTypes from 'prop-types';

import './EducationItemHeader.scss';
import ContentItemHeader from '../../../../components/ContentItemHeader/ContentItemHeader';

const EducationItemHeader = props => {
    return (
        <ContentItemHeader className={`EducationItemHeader ${props.className || ''}`}>
            <p className='organisationName'>{props.organisation}</p>
            <p className='programmeName'>{props.programme}</p>
        </ContentItemHeader>
    )
}

EducationItemHeader.propTypes = {
    className: PropTypes.string,
    organisation: PropTypes.string.isRequired,
    programme: PropTypes.string.isRequired,
}

export default EducationItemHeader
