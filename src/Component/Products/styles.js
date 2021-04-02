import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  prog: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    paddingLeft: "40%",
  },
  accordion: {
    position: "absolute",
    top: "25%",
    left: "2%",
    boxShadow: "none",
    // backgroundColor:'inherit',
  },
  heading: {
    fontWeight: "600",
  },
  content: {
    display: "block",
  },
  element: {
    width: 250,
    height: 250,
    transition: "0.17s",
    "&:hover": {
      boxShadow: " 1px 1px 5px 2px #999999",
      width: 290,
      height: 260,
      paddingTop: "14%",
    },
  },
  // element:{},
  media: {
    width: "80%",
    marginLeft: "10%",
    border: "1.4px solid #cca",
    objectFit: "fill",
  },
  favourites: {
    position: "absolute",
    right: "2%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 15px",
  },
}));
export default useStyles;