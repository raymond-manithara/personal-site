import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import GitIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { homeStyles } from './style';
import { commonStyles } from '../../common/styles';
import Banner from '../../images/banner.jpg';
import MenuIcon from '@material-ui/icons/Menu';
import Card from './components/card';
import Links from './components/links';
import useMediaQuery from '@material-ui/core/useMediaQuery';




const Home = (props) => {
    const homeClasses = homeStyles();
    const commonClasses = commonStyles();
    const [animationRotate, setAnimationRotate] = useState({});
    const matches = useMediaQuery('(min-width:600px)');

    useEffect(() => {

    }, [])
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
                        <Typography variant="h5" className={homeClasses.myBio}>Raymond Thomas</Typography>
                    </div>
                    {matches ? <Links /> : <></>}
                    <div
                        className={homeClasses.iconContainer}
                    >
                        <Button>
                            <GitIcon />
                        </Button>
                        <Button color="primary">
                            <LinkedInIcon />
                        </Button>
                    </div>
                </Grid>
            </Container>
            <div
                className={homeClasses.contentWrapper}

            >
                <Card />
                <img src={Banner} className={homeClasses.banner} />
            </div>
        </>
    );
};
export default Home;