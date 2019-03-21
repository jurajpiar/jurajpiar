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
                    <h1 className='title'>
                        <svg
                            viewBox="33 6 10 13"
                            xmlns="http://www.w3.org/2000/svg"
                            height="0.8em"
                            width="4em"
                            overflow="visible">
                            <defs>
                                <linearGradient id="blackGrad1">
                                    <stop
                                        offset="5%"
                                        stop-color="#000"
                                        stop-opacity="0">
                                    </stop>
                                    <stop offset="95%" stop-color="#000"></stop>
                                </linearGradient>
                            </defs>
                            <g>
                                <path d="M 8.302 6.475 L 9.522 6.475 L 9.522 7.855 L 8.302 8.085 L 8.302 14.445 C 8.302 15.538 7.945 16.408 7.232 17.055 C 6.512 17.695 5.605 18.015 4.512 18.015 C 3.325 18.015 2.385 17.728 1.692 17.155 C 0.999 16.575 0.665 15.722 0.692 14.595 L 0.712 14.555 L 2.932 14.555 C 2.932 15.148 3.075 15.582 3.362 15.855 C 3.649 16.128 4.032 16.265 4.512 16.265 C 4.939 16.265 5.299 16.105 5.592 15.785 C 5.885 15.458 6.032 15.012 6.032 14.445 L 6.032 8.085 L 4.812 7.855 L 4.812 6.475 L 8.302 6.475 ZM 16.282 17.855 L 16.142 16.785 C 15.869 17.178 15.532 17.482 15.132 17.695 C 14.732 17.908 14.279 18.015 13.772 18.015 C 12.879 18.015 12.182 17.732 11.682 17.165 C 11.176 16.592 10.922 15.705 10.922 14.505 L 10.922 11.015 L 9.992 10.775 L 9.992 9.405 L 10.922 9.405 L 13.202 9.405 L 13.202 14.515 C 13.202 15.135 13.306 15.578 13.512 15.845 C 13.719 16.112 14.026 16.245 14.432 16.245 C 14.786 16.245 15.096 16.185 15.362 16.065 C 15.622 15.952 15.836 15.785 16.002 15.565 L 16.002 11.015 L 15.002 10.775 L 15.002 9.405 L 16.002 9.405 L 18.282 9.405 L 18.282 16.255 L 19.312 16.485 L 19.312 17.855 L 16.282 17.855 ZM 20.375 17.855 L 20.375 16.485 L 21.475 16.255 L 21.475 11.015 L 20.265 10.775 L 20.265 9.405 L 23.595 9.405 L 23.695 10.635 C 23.895 10.195 24.151 9.855 24.465 9.615 C 24.778 9.368 25.141 9.245 25.555 9.245 C 25.675 9.245 25.798 9.255 25.925 9.275 C 26.058 9.295 26.171 9.315 26.265 9.335 L 26.015 11.415 L 25.085 11.395 C 24.751 11.395 24.475 11.458 24.255 11.585 C 24.035 11.718 23.868 11.905 23.755 12.145 L 23.755 16.255 L 24.845 16.485 L 24.845 17.855 L 20.375 17.855 ZM 34.801 17.855 L 32.171 17.855 C 32.105 17.715 32.048 17.572 32.001 17.425 C 31.955 17.272 31.918 17.122 31.891 16.975 C 31.625 17.288 31.295 17.538 30.901 17.725 C 30.515 17.918 30.071 18.015 29.571 18.015 C 28.745 18.015 28.088 17.792 27.601 17.345 C 27.115 16.892 26.871 16.278 26.871 15.505 C 26.871 14.712 27.188 14.098 27.821 13.665 C 28.455 13.232 29.388 13.015 30.621 13.015 L 31.781 13.015 L 31.781 12.195 C 31.781 11.788 31.665 11.472 31.431 11.245 C 31.198 11.018 30.851 10.905 30.391 10.905 C 30.131 10.905 29.901 10.935 29.701 10.995 C 29.495 11.055 29.328 11.128 29.201 11.215 L 29.061 12.125 L 27.341 12.125 L 27.341 10.245 C 27.761 9.965 28.241 9.728 28.781 9.535 C 29.321 9.342 29.908 9.245 30.541 9.245 C 31.588 9.245 32.438 9.502 33.091 10.015 C 33.745 10.528 34.071 11.258 34.071 12.205 L 34.071 15.695 C 34.071 15.828 34.075 15.952 34.081 16.065 C 34.081 16.178 34.088 16.288 34.101 16.395 L 34.801 16.485 L 34.801 17.855 Z M 30.191 16.335 C 30.531 16.335 30.845 16.258 31.131 16.105 C 31.411 15.958 31.628 15.775 31.781 15.555 L 31.781 14.265 L 30.621 14.265 C 30.135 14.265 29.768 14.378 29.521 14.605 C 29.268 14.832 29.141 15.102 29.141 15.415 C 29.141 15.702 29.235 15.925 29.421 16.085 C 29.608 16.252 29.865 16.335 30.191 16.335 ZM 38.918 9.405 L 38.918 18.165 C 38.918 19.158 38.655 19.925 38.128 20.465 C 37.608 20.998 36.882 21.265 35.948 21.265 C 35.735 21.265 35.542 21.255 35.368 21.235 C 35.188 21.215 35.005 21.182 34.818 21.135 L 34.928 19.395 C 35.042 19.428 35.158 19.452 35.278 19.465 C 35.398 19.478 35.528 19.485 35.668 19.485 C 35.975 19.485 36.215 19.378 36.388 19.165 C 36.555 18.945 36.638 18.612 36.638 18.165 L 36.638 11.015 L 35.418 10.775 L 35.418 9.405 L 38.918 9.405 Z M 38.878 5.665 L 38.878 7.365 L 36.598 7.365 L 36.598 5.665 L 38.878 5.665 ZM 45.328 6.475 L 49.528 6.475 C 50.828 6.475 51.855 6.812 52.608 7.485 C 53.361 8.152 53.738 9.028 53.738 10.115 C 53.738 11.202 53.361 12.075 52.608 12.735 C 51.855 13.395 50.828 13.725 49.528 13.725 L 47.608 13.725 L 47.608 16.255 L 48.828 16.485 L 48.828 17.855 L 44.118 17.855 L 44.118 16.485 L 45.328 16.255 L 45.328 8.085 L 44.118 7.855 L 44.118 6.475 L 45.328 6.475 Z M 47.608 8.235 L 47.608 11.975 L 49.528 11.975 C 50.161 11.975 50.641 11.802 50.968 11.455 C 51.295 11.108 51.458 10.665 51.458 10.125 C 51.458 9.578 51.295 9.128 50.968 8.775 C 50.641 8.415 50.161 8.235 49.528 8.235 L 47.608 8.235 ZM 54.447 17.855 L 54.447 16.485 L 55.547 16.255 L 55.547 11.015 L 54.327 10.775 L 54.327 9.405 L 57.827 9.405 L 57.827 16.255 L 58.927 16.485 L 58.927 17.855 L 54.447 17.855 Z M 57.827 5.665 L 57.827 7.375 L 55.547 7.375 L 55.547 5.665 L 57.827 5.665 ZM 67.693 17.855 L 65.063 17.855 C 64.996 17.715 64.939 17.572 64.893 17.425 C 64.846 17.272 64.809 17.122 64.783 16.975 C 64.516 17.288 64.186 17.538 63.793 17.725 C 63.406 17.918 62.963 18.015 62.463 18.015 C 61.636 18.015 60.979 17.792 60.493 17.345 C 60.006 16.892 59.763 16.278 59.763 15.505 C 59.763 14.712 60.079 14.098 60.713 13.665 C 61.346 13.232 62.279 13.015 63.513 13.015 L 64.673 13.015 L 64.673 12.195 C 64.673 11.788 64.556 11.472 64.323 11.245 C 64.089 11.018 63.743 10.905 63.283 10.905 C 63.023 10.905 62.793 10.935 62.593 10.995 C 62.386 11.055 62.219 11.128 62.093 11.215 L 61.953 12.125 L 60.233 12.125 L 60.233 10.245 C 60.653 9.965 61.133 9.728 61.673 9.535 C 62.213 9.342 62.799 9.245 63.433 9.245 C 64.479 9.245 65.329 9.502 65.983 10.015 C 66.636 10.528 66.963 11.258 66.963 12.205 L 66.963 15.695 C 66.963 15.828 66.966 15.952 66.973 16.065 C 66.973 16.178 66.979 16.288 66.993 16.395 L 67.693 16.485 L 67.693 17.855 Z M 63.083 16.335 C 63.423 16.335 63.736 16.258 64.023 16.105 C 64.303 15.958 64.519 15.775 64.673 15.555 L 64.673 14.265 L 63.513 14.265 C 63.026 14.265 62.659 14.378 62.413 14.605 C 62.159 14.832 62.033 15.102 62.033 15.415 C 62.033 15.702 62.126 15.925 62.313 16.085 C 62.499 16.252 62.756 16.335 63.083 16.335 ZM 68.63 17.855 L 68.63 16.485 L 69.73 16.255 L 69.73 11.015 L 68.52 10.775 L 68.52 9.405 L 71.85 9.405 L 71.95 10.635 C 72.15 10.195 72.406 9.855 72.72 9.615 C 73.033 9.368 73.396 9.245 73.81 9.245 C 73.93 9.245 74.053 9.255 74.18 9.275 C 74.313 9.295 74.426 9.315 74.52 9.335 L 74.27 11.415 L 73.34 11.395 C 73.006 11.395 72.73 11.458 72.51 11.585 C 72.29 11.718 72.123 11.905 72.01 12.145 L 72.01 16.255 L 73.1 16.485 L 73.1 17.855 L 68.63 17.855 Z" transform="matrix(1, 0, 0, 1, 0, 0)">
                                </path>
                            </g>
                        </svg>

                    </h1>
                    <p className='subtitle'>full-stack software engineer</p>
                    {this.state.isExpanded ? this.renderExpanded() : ''}
                </div>
            </HomePage>
        )
    }
}
