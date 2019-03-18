import React, { Component } from 'react'

import PageEducation from './components/PageEducation/PageEducation';
import './Education.scss';
import ContentList from '../../components/ContentList/ContentList';
import ContentItem from '../../components/ContentItem/ContentItem';
import ContentItemHeader from '../../components/ContentItemHeader/ContentItemHeader';
import ContentItemDate from '../../components/ContentItemDate/ContentItemDate';
import ContentItemBody from '../../components/ContentItemBody/ContentItemBody';

export default class Education extends Component {

    render() {
        return (
            <PageEducation className='education'>
                <div className='educationContent'>
                    <h1 >Education</h1>
                    <ContentList>
                        <ContentItem title='Univestity of the West of England<'>
                            <ContentItemHeader>
                                <p>Computer Science</p>
                            </ContentItemHeader>
                            <ContentItemDate>
                                <p>2014-2018</p>
                            </ContentItemDate>
                            <ContentItemBody>
                                <p>A 3+1 year programme with a focus on Artificial Intelligence and Enterprise Systems Development.</p>
                                <b>Awards:</b>
                                <p>First class honours degree</p>
                                <p>Dean's award for academic excelence in year 1</p>
                                <p>Dean's award for academic excelence in year 2</p>
                                <p>Tony Papadopoullos Bursary in year 2 and 3</p>
                            </ContentItemBody>
                        </ContentItem>

                        <ContentItem title='Cornwall Collage'>
                            <ContentItemHeader>
                                <p>Computing</p>
                            </ContentItemHeader>
                            <ContentItemDate>
                                <p>2013-2014</p>
                            </ContentItemDate>
                            <ContentItemBody>
                                <p>Access to Higher Education Diploma</p>
                            </ContentItemBody>
                        </ContentItem>
                    </ContentList>
                </div>
            </PageEducation>
        )
    }
}
