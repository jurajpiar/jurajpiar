import React from 'react'
import PropTypes from 'prop-types'

import './ContentItemHeader.scss';

const ContentItemHeader = props => {
    return (
        <div className={`ContentItemHeader ${props.className}`}>
            <div>
                {props.children}
            </div>
        </div>
    )
}

ContentItemHeader.propTypes = {
    className: PropTypes.string,
}

export default ContentItemHeader
