import React, { Component } from 'react'
import HomePage from './components/HomePage/HomePage';

import './Home.scss';

export default class Me extends Component {

    render() {
        return (
            <HomePage>
                <div>
                    <h1 className='title'>Juraj Piar</h1>
                    <h2>Software Engineer</h2>
                </div>
            </HomePage>
        )
    }
}
