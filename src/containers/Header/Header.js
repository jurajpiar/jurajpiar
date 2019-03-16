import React, { Component } from 'react'
import NavMenu from '../NavMenu/NavMenu';

import './Header.scss';

const FIRST_NAME = 'Juraj';
const SECOND_NAME = 'Piar';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: FIRST_NAME[0] + SECOND_NAME[0],
            isMenuOpen: false,
        }
    }

    toggleIsMenuOpen = () => {
        this.setState({
            name: this.state.isMenuOpen ? FIRST_NAME[0] + SECOND_NAME[0] : `${FIRST_NAME} ${SECOND_NAME}`,
            isMenuOpen: !this.state.isMenuOpen
        });
    }

    render() {
        return (
            <header>
                <p
                    className='name'
                    onClick={this.toggleIsMenuOpen}>
                    {this.state.name}
                </p>
                {this.state.isMenuOpen
                    ? <NavMenu
                        onDismiss={this.toggleIsMenuOpen} />
                    : ''}
            </header>
        )
    }
}
