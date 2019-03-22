import React from 'react'
import PropTypes from 'prop-types'

import Page from '../../../../components/Page/Page';

const HomePage = (props) => {
    return (
        <Page className={`HomePage ${props.className}`}
            center='center'>
            {props.children}
        </Page>
    )
};

HomePage.propTypes = {
    className: PropTypes.string,
};

export default HomePage;