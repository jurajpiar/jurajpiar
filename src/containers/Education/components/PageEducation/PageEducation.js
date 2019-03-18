import React from 'react'

import Page from '../../../../components/Page/Page';

const PageEducation = (props) => {
    return (
        <Page
            center={`centerX ${props.className || ''}`}>
            {props.children}
        </Page>
    )
}

export default PageEducation
