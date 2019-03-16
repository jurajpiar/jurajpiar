import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Page.scss';

export default class Page extends Component {
    static propTypes = {
        center: PropTypes.string
    }

    render() {
        return (
            <div
                className={`page ${this.props.center}`}>
                {this.props.children}
            </div>
        )
    }
}
