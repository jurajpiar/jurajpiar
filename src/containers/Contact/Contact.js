import React, { Component } from 'react'
import ContactPage from './components/ContactPage/ContactPage';
import ContentItem from '../../components/ContentItem/ContentItem';
import ContentList from '../../components/ContentList/ContentList';
import ContentItemInfo from '../../components/ContentItemInfo/ContentItemInfo';
import ContentItemBody from '../../components/ContentItemBody/ContentItemBody';

import './Contact.scss';



export class Contact extends Component {
    render() {
        return (
            <ContactPage className='ContactPage'>
                <h1 >Contact</h1>
                <ContentList className='ContactList'>
                    <ContentItem className='ContactListItem'>
                        <ContentItemInfo>
                            Email:
                        </ContentItemInfo>
                        <ContentItemBody>
                            <a href="mailto:juraj.piar@icloud.com">juraj.piar@icloud.com</a>
                        </ContentItemBody>
                    </ContentItem>
                    <ContentItem>
                        <ContentItemInfo>
                            This:
                        </ContentItemInfo>
                        <ContentItemBody>
                            <a href="https://github.com/jurajpiar/jurajpiar">https://github.com/jurajpiar/jurajpiar</a>
                        </ContentItemBody>
                    </ContentItem>
                </ContentList>
            </ContactPage>
        )
    }
}

export default Contact
