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
            height: "2%"

        },
        introNote: {
            padding: "20px 20px 20px 20px"
        },
        contentWrapper: {
            display: "inline - flex",
            position: "relative"
        },
        contentBox: {
            position: "absolute",
            width: 500,
            height: 400,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white"
        }
    }
);