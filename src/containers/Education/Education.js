import React, { Component } from 'react'

import PageEducation from './components/PageEducation/PageEducation';
import './Education.scss';
import ContentList from '../../components/ContentList/ContentList';
import ContentItem from '../../components/ContentItem/ContentItem';
import ContentItemBody from '../../components/ContentItemBody/ContentItemBody';
import EducationItemHeader from './components/EducationItemHeader/EducationItemHeader';
import EducationItemInfo from './components/EducationItemInfo/EducationItemInfo';

export default class Education extends Component {

    render() {
        return (
            <PageEducation className='education'>
                <div className='educationContent'>
                    <h1 >Education</h1>
                    <ContentList>
                        <ContentItem>
                            <EducationItemHeader
                                organisation='University of the West of England'
                                programme='BSc. Computer Science' />
                            <EducationItemInfo
                                location='Bristol, UK'
                                date='2014-2018'
                            />
                            <ContentItemBody>
                                <p>A 3+1 year programme with a focus on Artificial Intelligence and Enterprise Systems Development.</p>
                                <b>Awards:</b>
                                <p>First class honours degree</p>
                                <p>Dean's award for academic excelence in year 1</p>
                                <p>Dean's award for academic excelence in year 2</p>
                                <p>Tony Papadopoullos Bursary in year 2 and 3</p>
                            </ContentItemBody>
                        </ContentItem>

                        <ContentItem>
                            <EducationItemHeader
                                organisation='Cornwall College'
                                programme='Computing' />
                            <EducationItemInfo
                                location='Saltash, UK'
                                date='2013-2014'
                            />
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
