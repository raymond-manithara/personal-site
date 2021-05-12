import React from 'react';
import { Link } from 'react-router-dom';
import { homeStyles } from '../style';

const Links = () => {
    const homeClasses = homeStyles();
    return (
        <>
            <Link to="/about" className={homeClasses.links} >About</Link>
            <Link to="/gallery" className={homeClasses.links} >Gallery</Link>
            <Link to="/contacts" className={homeClasses.links} >Contact</Link>
        </>
    );
};

export default Links;