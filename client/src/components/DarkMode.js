import React, {useState} from 'react';
import {UseDarkMode} from '../hooks/UseDarkMode';

const DarkMode = () => {
    const toggle = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    const [darkMode, setDarkMode] = UseDarkMode(toggle);
    return(
        <div className='dark-mode-toggle'>
            <div
                onClick={toggle}
                className={darkMode ? 'toggled' : 'toggle'}
            />
        </div>
    );
};

export default DarkMode;