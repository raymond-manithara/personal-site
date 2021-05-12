import React from 'react';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { homeStyles } from '../style';
import { Typography, Button, Grid } from '@material-ui/core';
import Me from '../../../images/me.jpg';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Card = (props) => {
    const matches = useMediaQuery('(min-width:600px)');
    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounce, 'bounce'),
            marginLeft: matches ? "38%" : "10%",
            width: matches ? "25em" : "20em",
        }
    }

    const homeClasses = homeStyles();
    return (
        <StyleRoot>
            <div
                className={homeClasses.contentBox}
                style={styles.bounce}
            >
                <img src={Me} className={homeClasses.profileImage} style={{ marginLeft: matches ? "32%" : "28%", }} />
                <Typography
                    variant="subtitle1"
                    className={homeClasses.introNote}
                    align="center"
                >
                    Hai, I am <strong>Raymond Thomas</strong> I am a Full-stack developer who prominantly working on the front-end and mobile apps.<br /> Let's have a look at my Bio.
                        </Typography>
                <Grid className={homeClasses.buttonTour}>
                    <Button color="primary" variant="contained">Take a tour...</Button>
                </Grid>

            </div>
        </StyleRoot>
    );
};

export default Card;