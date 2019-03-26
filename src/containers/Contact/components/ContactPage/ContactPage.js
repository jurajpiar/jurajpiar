import React from 'react'
import Page from '../../../../components/Page/Page';

const ContactPage = (props) => {
    return (
        <Page
            center='center'>
            <div>
                {props.children}
            </div>
        </Page>
    )
}

export default ContactPage
