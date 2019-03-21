import React, { Component } from 'react'

import './Header.scss';

import NavMenu from '../NavMenu/NavMenu';

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
        if (openMenu) this.setState({
            name: openMenu ? `${FIRST_NAME} ${SECOND_NAME}` : FIRST_NAME[0] + SECOND_NAME[0],
            isMenuOpen: openMenu
        });
        else this.setState({
            name: !this.state.isMenuOpen ? `${FIRST_NAME} ${SECOND_NAME}` : FIRST_NAME[0] + SECOND_NAME[0],
            isMenuOpen: !this.state.isMenuOpen
        });
    }

    render() {
        return (
            <header
                onMouseLeave={() => this.toggleIsMenuOpen(false)}
            >
                {
                    this.state.isMenuOpen
                        ? <NavMenu />
                        : <p className='name'
                            onClick={() => this.toggleIsMenuOpen()}>
                            {this.state.name}
                        </p>
                }
            </header>
        )
    }
    componentDidMount() {
        // Setup hint timer
    }
    componentDidUpdate() {
        // Stop hint timer
    }
}
