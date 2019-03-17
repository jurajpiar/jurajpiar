import React from 'react'

import Page from '../../../../components/Page/Page';

const PageCareer = (props) => {
    return (
        <Page
            center={`centerX ${props.className}`}>
            {props.children}
        </Page>
    )
}

export default PageCareer
