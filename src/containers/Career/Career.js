import React, { Component } from 'react'
import PageCareer from './components/PageCareer/PageCareer';
import './Career.scss';
import ContentList from '../../components/ContentList/ContentList';
import ContentItem from '../../components/ContentItem/ContentItem';
import ContentItemHeader from '../../components/ContentItemHeader/ContentItemHeader';
import ContentItemDate from '../../components/ContentItemDate/ContentItemDate';
import ContentItemBody from '../../components/ContentItemBody/ContentItemBody';

export default class Career extends Component {

    render() {
        return (
            <PageCareer className='Career'>
                <div className='educationContent'>
                    <h1 >Career</h1>
                    <ContentList>
                        <ContentItem>
                            <ContentItemHeader>
                                <p>Buzz Interactive Ltd.</p>
                                <p>Software Developer</p>
                            </ContentItemHeader>
                            <ContentItemDate>
                                <p>2018-Present (10mo)</p>
                            </ContentItemDate>
                            <ContentItemBody>
                                <p></p>
                            </ContentItemBody>
                        </ContentItem>

                        <ContentItem>
                            <ContentItemHeader>
                                <p>European Organisation for Nuclear Research (CERN)</p>
                                <p>Software Developer (Technical Student)</p>
                            </ContentItemHeader>
                            <ContentItemDate>
                                <p>2016-2017 (12mo)</p>
                            </ContentItemDate>
                            <ContentItemBody>
                                <p></p>
                            </ContentItemBody>
                        </ContentItem>
                    </ContentList>
                </div>
            </PageCareer>
        )
    }
}
