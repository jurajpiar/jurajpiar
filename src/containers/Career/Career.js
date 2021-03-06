import React, { Component } from 'react'
import PageCareer from './components/PageCareer/PageCareer';
import './Career.scss';
import ContentList from '../../components/ContentList/ContentList';
import ContentItem from '../../components/ContentItem/ContentItem';
import ContentItemBody from '../../components/ContentItemBody/ContentItemBody';
import CareerItemHeader from './components/CareerItemHeader/CareerItemHeader';
import CareerItemInfo from './components/CareerItemInfo/CareerItemInfo';

export default class Career extends Component {

    getDateDiff = (dateFrom, dateTo) => {
        const yearsDiff = dateTo.getFullYear() - dateFrom.getFullYear();
        const monthsDiff = dateTo.getMonth() - dateFrom.getMonth();
        return yearsDiff * 12 + monthsDiff;
    }

    render() {
        return (
            <PageCareer className='Career'>
                <div className='educationContent'>
                    <h1 >Career</h1>
                    <ContentList>
                        <ContentItem>
                            <CareerItemHeader
                                companyName='Colateral.io'
                                jobTitle='Senior Software Developer'
                            />
                            <CareerItemInfo
                                location='Truro, UK'
                                date={`2019-Present (${this.getDateDiff(new Date(2019, 4, 9), new Date())}mo)`}
                            />
                            <ContentItemBody>
                                <p><b>Colateral.io</b></p>
                                <ul className='contentItemBodyList'>
                                    <li>
                                        Full-stack JavaScript development of the core business software.
                                    </li>
                                    <li>
                                        Research and Development of future business solutions, features and optimisations.
                                    </li>
                                    <li>
                                        Providing support to more junior developers.
                                    </li>
                                </ul>
                            </ContentItemBody>
                        </ContentItem>

                        <ContentItem>
                            <CareerItemHeader
                                companyName='Buzz Interactive Ltd.'
                                jobTitle='Software Developer'
                            />
                            <CareerItemInfo
                                location='Newquay, UK'
                                date={`2018-2019 (${this.getDateDiff(new Date(2018, 6, 9), new Date(2019, 4, 9))}mo)`}
                            />
                            <ContentItemBody>
                                <p><b>Ménière’s monitor</b> - c#.net Xamarin project extending existing iOS and droid app as well as orchardCMS-based web app.</p>
                                <p><b>Ripostr</b> - Ionic4 Angular7 iOS/droid app written from scratch in Typescript</p>
                                <p><b>Txties</b> - feasibility study for an AI chatbot and prototype using the Oscova framework for .net using c# and siml.</p>
                            </ContentItemBody>
                        </ContentItem>

                        <ContentItem >
                            <CareerItemHeader
                                companyName='European Organisation for Nuclear Research (CERN)'
                                jobTitle='Software Developer (Technical Student)'
                            />
                            <CareerItemInfo
                                location='Geneva, CH'
                                date={`2016-2017 (${this.getDateDiff(new Date(2016, 8, 1), new Date(2017, 8, 1))}mo)`}
                            />
                            <ContentItemBody>
                                <p><b>360° Panorama</b></p>
                                <ul className='contentItemBodyList'>
                                    <li>
                                        Implementation of a given virtual tour of the accelerator tunnels (to reduce radiation exposure) prototype using JavaEE8 with Spring framework and JavaScript (ES6, Three.js, WebPack)
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
                                <ul className='contentItemBodyList'>
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
                        <ContentItem className='grouped'>
                            <CareerItemHeader
                                companyName='Arkevista Ltd.'
                                jobTitle='Software Engineer (Consultant)'
                            />
                            <CareerItemInfo
                                location='Bristol, UK'
                                date={`2017-2018 (${this.getDateDiff(new Date(2017, 11), new Date(2018, 8))}mo)`}
                            />
                            <ContentItemBody>
                                <p>Providing ad-hoc software support and core system maintenance (JavaSE8 and Python)</p>
                            </ContentItemBody>
                        </ContentItem>
                        <ContentItem className='grouped'>
                            <CareerItemHeader
                                companyName=''
                                jobTitle='Software Engineer (Contractor)'
                            />
                            <CareerItemInfo
                                date={`2016-2017 (${this.getDateDiff(new Date(2016, 8), new Date(2017, 6))}mo)`}
                            />
                            <ContentItemBody>
                                <p>Further development and maintenance of the core software system</p>
                                <p>Supporting the analysts with other ad­hoc requirements</p>
                            </ContentItemBody>
                        </ContentItem>
                        <ContentItem className='grouped'>
                            <CareerItemHeader
                                companyName=''
                                jobTitle='Software Engineer (Summer Intern)'
                            />
                            <CareerItemInfo
                                date={`2015-2015 (${this.getDateDiff(new Date(2015, 5), new Date(2015, 8))}mo)`}
                            />
                            <ContentItemBody>
                                <p><b>Arki</b></p>
                                <ul className='contentItemBodyList'>
                                    <li>Co-created the core software solution in JavaSE with one other intern</li>
                                    <li>Heavily involved in defining the specifications for the core system</li>
                                    <li>Created plugins for a geographical information system for viewing, categorising and tagging shipping data in Python</li>
                                </ul>
                                <p>Supported the analysts with other ad­hoc requirements (mainly Python)</p>
                            </ContentItemBody>
                        </ContentItem>
                    </ContentList>
                </div>
            </PageCareer>
        )
    }
}
