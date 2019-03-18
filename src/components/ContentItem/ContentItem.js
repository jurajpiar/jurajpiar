import React from 'react'
import PropTypes from 'prop-types'

import './ContentItem.scss';

const ContentItem = props => {
    return (
        <>
            <li className={`ContentItem ${props.className}`}>
                <h5 className='ContentItemTitle'>{props.title}</h5>
                <div className='ContentItemContent'>
                    {props.children}
                </div>
            </li>
        </>
    )
}

ContentItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default ContentItem
