import { makeStyles } from '@material-ui/core/styles';

export const homeStyles = makeStyles(
    {
        appBar: {
            width: "100%",
            padding: "20px 20px 20px 20px",
        },
        myBio: {
            padding: "0px 0px 0px 50px",
            fontWeight: "bold"
        },
        wrapper: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "start"
        },
        banner: {
            width: "100%",
            height: "550px",

        },
        introNote: {
            marginTop: "20px",
            marginLeft: "10%",
            marginRight: "20px",
            color: "white"
        },
        contentWrapper: {
            display: "inline - flex",
            position: "relative"
        },
        contentBox: {
            position: "absolute",
            height: 400,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            marginTop: "100px",
            boxShadow: "0px 0px 5px 1px rgba(255,255,255,0.55)",
            borderRadius: "50px 0px 50px 0px",

        },
        profileImage: {
            marginTop: "20px",
            width: "150px",
            height: "150px",
            borderRadius: "50%"
        },
        buttonTour: {
            width: "100%",
            justifyContent: "space-evenly",
            display: "flex",
            marginTop: "20px"
        },
        iconContainer: {
            marginLeft: "auto"
        },
        links: {
            textDecoration: "none",
            color: "black",
            margin: "10px 0px 0px 50px",
            fontWeight: "bold"
        }

    }
);