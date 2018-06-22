import React, { PureComponent } from 'react';
import {
    withRouter,
    NavLink,
} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './header.scss';

@withRouter
export default class Header extends PureComponent {
    render() {
        return (
            <header>

                <nav className="tabs">
                    <Button size="small" color="primary">
                        <NavLink to="/">Main</NavLink>
                    </Button>
                    <Button size="small" color="primary">
                        <NavLink to="/Add">Add</NavLink>
                    </Button>
                </nav>
            </header>
        );
    }
}
