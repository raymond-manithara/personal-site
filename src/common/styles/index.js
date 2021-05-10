import { makeStyles } from '@material-ui/core/styles';
export const commonStyles = makeStyles({
    column: {
        display: "inline-flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100 %",
    },
    row: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100 %",
        flex: 1
    }
});
