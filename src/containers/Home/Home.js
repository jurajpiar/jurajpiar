import React, { Component } from 'react'
import HomePage from './components/HomePage/HomePage';

import './Home.scss';

export default class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        }
    }

    renderExpanded = () => {
        return (
            <div className='expanded'>
                <p>Currently full-stack enthusiast.</p>
                <p>I am a surfer and coder living in Newquay, Cornwall, UK, Europe, Earth, Terra, Milky Way, Local Group, Virgo SC.</p>
                <p>I love particle physics, quantum mechanics and reading (mainly science-fiction) books. Further snowboarding, travelling and my family, my girlfriend and friends. And I generally like building stuff. </p>
                <p>I feel strongly about writing readable, testable and maintainable code and prefer to do things properly rather than hack stuff together to meet an unlikely deadline.</p>
                <p>My preferred stack is NodeJS and React or Angular. My favourite full-stack framework is MeteorJS for its DDP protocol which in a way blends front-end with back-end via WebSockets.</p>
                <p>I do, however enjoy other languages (than JavaScript), such as CSharp, Python and TypeScript. Also I am quite proficient in Java, but I am not a big fan.</p>
                <p>As much as I want to improve my current skillset I also am always keen to learn new languages, frameworks and methodologies, as I believe that traditionalism leads to stagnation, which, at least in this industry, leads to obsoletion.</p>
                <p>I enjoy learning but also sharing my knowledge. I do my best to take others' psychologies into consideration when explaing stuff.</p>
            </div>
        )
    }

    render() {
        return (
            <HomePage>
                <div
                    className='wrapper'
                    onMouseEnter={() => this.setState({ isExpanded: true })}
                    onMouseLeave={() => this.setState({ isExpanded: false })}
                >
                    <h1 className='title'>Juraj Piar</h1>
                    <p className='subtitle'>full-stack software engineer</p>
                    {this.state.isExpanded ? this.renderExpanded() : ''}
                </div>
            </HomePage>
        )
    }
}
