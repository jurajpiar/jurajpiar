import React from 'react'
import PropTypes from 'prop-types'

import './ContentItemDate.scss';

const ContentItemDate = props => {
    return (
        <div className={`ContentItemDate ${props.className || ''}`}>
            <div>
                {props.children}
            </div>
        </div>
    )
}

ContentItemDate.propTypes = {
    className: PropTypes.string,
}

export default ContentItemDate
