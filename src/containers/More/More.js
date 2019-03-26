import React, { Component } from 'react'
import MorePage from './components/MorePage/MorePage';
import ContentItem from '../../components/ContentItem/ContentItem';
import ContentList from '../../components/ContentList/ContentList';
import ContentItemInfo from '../../components/ContentItemInfo/ContentItemInfo';
import ContentItemBody from '../../components/ContentItemBody/ContentItemBody';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './More.scss';
import ContentItemHeader from '../../components/ContentItemHeader/ContentItemHeader';



export class More extends Component {
    render() {
        return (
            <MorePage>
                <h1 >More</h1>
                <ContentList>
                    <a href="mailto:juraj.piar@icloud.com">
                        <ContentItem className='MoreListItem'>
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
            </MorePage>
        )
    }
}

export default More
