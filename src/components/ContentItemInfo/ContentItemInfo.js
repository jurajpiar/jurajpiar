import React from 'react'
import PropTypes from 'prop-types'

import './ContentItemInfo.scss';

const ContentItemInfo = props => {
    return (
        <div className={`ContentItemInfo ${props.className || ''}`}>
            <div>
                {props.children}
            </div>
        </div>
    )
}

ContentItemInfo.propTypes = {
    className: PropTypes.string,
}

export default ContentItemInfo
