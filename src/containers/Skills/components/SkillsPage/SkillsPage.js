import React from 'react'
import Page from '../../../../components/Page/Page';

const SkillsPage = (props) => {
    return (
        <Page
            center='centerX'>
            {props.children}
        </Page>
    )
}

export default SkillsPage
