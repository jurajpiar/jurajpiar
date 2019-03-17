import React from 'react'
import PropTypes from 'prop-types'

import './ContentItemBody.scss';

const ContentItemBody = props => {
    return (
        <div className={`ContentItemBody ${props.className}`}>
            <div>
                {props.children}
            </div>
        </div>
    )
}

ContentItemBody.propTypes = {
    className: PropTypes.string,
}

export default ContentItemBody
