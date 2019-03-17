import React from 'react'
import PropTypes from 'prop-types'

import './ContentList.scss';

const ContentList = props => {
    return (
        <ul className={`ContentList ${props.className}`}>
            {props.children}
        </ul>
    )
}

ContentList.propTypes = {
    className: PropTypes.string,
}

export default ContentList
