import React from 'react'
import Page from '../../../../components/Page/Page';

const MorePage = (props) => {
    return (
        <Page
            center='center'>
            <div>
                {props.children}
            </div>
        </Page>
    )
}

export default MorePage
