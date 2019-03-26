import React, { Component } from 'react'
import ContactPage from './components/ContactPage/ContactPage';
import ContentItem from '../../components/ContentItem/ContentItem';
import ContentList from '../../components/ContentList/ContentList';
import ContentItemInfo from '../../components/ContentItemInfo/ContentItemInfo';
import ContentItemBody from '../../components/ContentItemBody/ContentItemBody';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Contact.scss';
import ContentItemHeader from '../../components/ContentItemHeader/ContentItemHeader';



export class Contact extends Component {
    render() {
        return (
            <ContactPage>
                <h1 >Contact</h1>
                <ContentList>
                    <a href="mailto:juraj.piar@icloud.com">
                        <ContentItem className='ContactListItem'>
                            <ContentItemInfo>
                                <FontAwesomeIcon icon='envelope' />
                            </ContentItemInfo>
                            <ContentItemBody>juraj.piar@icloud.com
                            </ContentItemBody>
                        </ContentItem>
                    </a>
                    <a href="https://www.linkedin.com/in/juraj-p-00833412" target="_blank" rel="noopener noreferrer" >
                        <ContentItem>
                            <ContentItemInfo>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </ContentItemInfo>
                            <ContentItemBody>juraj-p-00833412</ContentItemBody>
                        </ContentItem>
                    </a>
                    <a href="https://github.com/jurajpiar/jurajpiar" target="_blank" rel="noopener noreferrer" >
                        <ContentItem>
                            <ContentItemInfo>
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </ContentItemInfo>
                            <ContentItemBody>github.com/jurajpiar/jurajpiar
                            </ContentItemBody>
                        </ContentItem>
                    </a>
                </ContentList>
            </ContactPage>
        )
    }
}

export default Contact
