import React from 'react'
import PropTypes from 'prop-types'

import './ContentItem.scss';

const ContentItem = props => {
    return (
        <li className={`ContentItem ${props.className}`}>
            {props.children}
        </li>
    )
}

ContentItem.propTypes = {

}

export default ContentItem
