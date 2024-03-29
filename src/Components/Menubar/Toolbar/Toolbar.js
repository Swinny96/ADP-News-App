import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';

import DrawerToggle from '../DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
    </header>
);

export default toolbar;