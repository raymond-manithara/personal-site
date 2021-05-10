import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid } from '@material-ui/core';
import { homeStyles } from './style';
import { commonStyles } from '../../common/styles';
import Banner from '../../images/banner.jpg';
import MenuIcon from '@material-ui/icons/Menu';

const Home = (props) => {
    const homeClasses = homeStyles();
    const commonClasses = commonStyles();
    return (
        <>
            <Container className={homeClasses.appBar}>
                <Grid
                    className={homeClasses.wrapper}
                >
                    <div
                        className={commonClasses.column}
                    >
                        <MenuIcon />
                    </div>
                    <div
                        className={commonClasses.column}
                    >
                        <Typography variant="h5" className={homeClasses.myBio}>My Bio</Typography>
                    </div>
                </Grid>
            </Container>
            <Typography
                variant="subtitle1"
                className={homeClasses.introNote}
            >
                Hai, I am <strong>Raymond Thomas</strong> Let's have a look at my Bio.
            </Typography>
            <div
                className={homeClasses.contentWrapper}
            >
                <Container
                    className={homeClasses.contentBox}
                >
                    hai
                </Container>
                <img src={Banner} className={homeClasses.banner} />
            </div>


            <Link to='/about'>About</Link>
        </>
    );
};
export default Home;