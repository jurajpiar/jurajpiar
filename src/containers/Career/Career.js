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
                        <ContentItem title='Buzz Interactive Ltd.'>
                            <ContentItemHeader>
                                <p>Software Developer</p>
                            </ContentItemHeader>
                            <ContentItemDate>
                                <p>2018-Present (10mo)</p>
                                <p className='faint'>Newquay, UK</p>
                            </ContentItemDate>
                            <ContentItemBody>
                                <p><b>Ménière’s monitor</b> - c#.net Xamarin project extending existing iOS and droid app as well as orchardCMS-based web app.</p>
                                <p><b>Ripostr</b> - Ionic4 Angular7 iOS/droid app written from scratch in Typescript</p>
                                <p><b>Txties</b> - feasibility study for an AI chatbot and prototype using the Oscova framework for .net using c# and siml.</p>
                            </ContentItemBody>
                        </ContentItem>

                        <ContentItem title='European Organisation for Nuclear Research (CERN)'>
                            <ContentItemHeader>
                                <p>Software Developer (Technical Student)</p>
                            </ContentItemHeader>
                            <ContentItemDate>
                                <p>2016-2017 (12mo)</p>
                                <p className='faint'>Geneva, CH</p>
                            </ContentItemDate>
                            <ContentItemBody>
                                <p><b>360° Panorama</b></p>
                                <ul>
                                    <li>
                                        Prototype and implementation of a virtual tour of the accelerator tunnels using JavaEE with Spring framework and JavaScript (ES6, Three.js, WebPack) to reduce radiation exposure
                                    </li>
                                    <li>
                                        Communication of requirements from a number of stakeholders (groups, sections and teams within CERN)
                                    </li>
                                    <li>
                                        Close cooperation with CERN GIS team resulting in seamless front­end integration with CERN maps
                                    </li>
                                    <li>
                                        Close cooperation with CERN EDMS team resulting in seamless front­end integration with CERN engineering and equipment data management system
                                    </li>
                                    <li>
                                        Managing the handover of the project before leaving
                                    </li>
                                </ul>
                                <p><b>Layout Drawings</b></p>
                                <ul>
                                    <li>
                                        A Prototype of a web application for viewing of the LHC layout drawings
                                    </li>
                                    <li>
                                        Analysis of existing processes and their alternatives
                                    </li>
                                    <li>
                                        Production the LHC layout drawings using AutoCAD, CATIA, MS Excel and Visual Basic for
Applications (VBA)
                                    </li>
                                </ul>
                            </ContentItemBody>
                        </ContentItem>

                        <ContentItem title='Arkevista Ltd.'>
                            <ContentItemHeader>
                                <p>Software Engineer Consultant</p>
                            </ContentItemHeader>
                            <ContentItemDate>
                                <p>2017-2018</p>
                                <p className='faint'>Geneva, CH</p>
                            </ContentItemDate>
                            <ContentItemBody>
                                <p>Providing ad-hoc software support and core system maintenance. Both Java and Python.</p>
                            </ContentItemBody>
                        </ContentItem>
                    </ContentList>
                </div>
            </PageCareer>
        )
    }
}
