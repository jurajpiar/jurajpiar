import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import './NavMenu.scss';

export default class NavMenu extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
    };

    renderMenu = () => {
        return (
            <>
                <div className='blur' />
                <div className='nav-list'>
                    <ul onMouseOver={event => event.target.click()}>
                        <li>
                            <Link to="/"><b>Juraj Piar</b></Link>
                        </li>
                        <li>
                            <Link to="/education">Education</Link>
                        </li>
                        <li>
                            <Link to="/career">Career</Link>
                        </li>
                        {
                            // <li>
                            // <Link to="/skills">Skills</Link>
                            // </li>
                        }
                        <li>
                            <Link to='/more'>More</Link>
                        </li>
                    </ul>
                </div>
            </>
        );
    }

    renderMenuButton = () => {
        return (
            <div>button</div>
        )
    }

    render() {
        return (
            <div className='Nav'>
                {!this.props.isOpen ? this.renderMenu() : this.renderMenuButton()}
            </div>
        );
    }
}
