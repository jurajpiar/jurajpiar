import React from 'react'
import PropTypes from 'prop-types'

import Page from '../../../../components/Page/Page';

const MorePage = props => {
    return (
        <Page
            className={`MorePage ${props.className || ''}`}
            center='center'>
            <div>
                {props.children}
            </div>
        </Page>
    )
}

MorePage.propTypes = {
    className: PropTypes.string,
}

export default MorePage