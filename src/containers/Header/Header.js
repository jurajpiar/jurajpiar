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

    toggleIsMenuOpen = (openMenu) => {
        this.setState({
            name: openMenu ? `${FIRST_NAME} ${SECOND_NAME}` : FIRST_NAME[0] + SECOND_NAME[0],
            isMenuOpen: openMenu
        });
    }

    render() {
        return (
            <header
                onMouseLeave={() => this.toggleIsMenuOpen(false)}
            >
                <p
                    className='name'
                    onMouseEnter={() => this.toggleIsMenuOpen(true)}
                >
                    {this.state.name}
                </p>
                {this.state.isMenuOpen
                    ? <NavMenu
                    // onDismiss={this.toggleIsMenuOpen(false)}
                    />
                    : ''}
            </header>
        )
    }
}
