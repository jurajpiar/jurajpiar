import React, { Component } from 'react'

import PageEducation from './components/PageEducation/PageEducation';
import './Education.scss';

export default class Education extends Component {

    render() {
        return (
            <PageEducation className='education'>
                <div className='educationContent'>
                    <h1 >Education</h1>
                    <ul className='contentList'>
                        <li className='contentItem'>
                            <div className='itemBody'>
                                <p>Achieved First class degree with Honors.</p>
                                <p>Deans award</p>
                                <p>Deans award</p>
                                <p>Tony Pappodopoulus award</p>
                            </div>
                            <div className='itemHeader'>
                                <p>Univestity of the West of England</p>
                            </div>
                            <div className='itemDate'>
                                <p>2014-2018</p>
                            </div>
                        </li>
                        <li className='contentItem'>
                            <div className='itemBody'>
                                Achieved First class degree, ....
                            </div>
                            <div className='itemHeader'>
                                Cornwall Collage
                            </div>
                            <div className='itemDate'>
                                24-28
                            </div>
                        </li>
                    </ul>
                </div>
            </PageEducation>
        )
    }
}
