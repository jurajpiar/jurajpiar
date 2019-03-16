import React from 'react'
import Page from '../../../../components/Page/Page';

const HomePage = (props) => {
    return (
        <Page
            center='center'>
            {props.children}
        </Page>
    )
}

export default HomePage
