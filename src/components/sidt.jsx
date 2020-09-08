import React, { Component } from "react";
import "./sideNavBar.css";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";
// import Typography from "@material-ui/core/Typography";

// import Tooltip from "@material-ui/core/Tooltip";
// import Link from "@material-ui/core/Link";
// import { ListItem } from "@material-ui/core";

const SideNaveBar = (props) => {
  // const useStyles = makeStyles((theme) => ({
  //   toolbar: {
  //     borderBottom: `1px solid ${theme.palette.divider}`,
  //     background: "",
  //   },
  //   toolbarTitle: {
  //     flex: 1,
  //     color: "#FFFFFF",
  //   },
  //   listItem: {
  //     float: "left",
  //     color: "inherit",
  //     position: "relative",
  //     display: "block",
  //     width: "auto",
  //     margin: "0",
  //     padding: "0",
  //     [theme.breakpoints.down("sm")]: {
  //       width: "100%",
  //       "&:after": {
  //         width: "calc(100% - 30px)",
  //         content: '""',
  //         display: "block",
  //         height: "1px",
  //         marginLeft: "15px",
  //         backgroundColor: "#e5e5e5",
  //       },
  //     },
  //   },
  //   tooltip: {
  //     padding: "10px 15px",
  //     minWidth: "130px",
  //     color: "#555555",
  //     lineHeight: "1.7em",
  //     background: "#FFFFFF",
  //     border: "none",
  //     borderRadius: "3px",
  //     boxShadow:
  //       "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
  //     maxWidth: "200px",
  //     textAlign: "center",
  //     fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  //     fontSize: "0.875em",
  //     fontStyle: "normal",
  //     fontWeight: "400",
  //     textShadow: "none",
  //     textTransform: "none",
  //     letterSpacing: "normal",
  //     wordBreak: "normal",
  //     wordSpacing: "normal",
  //     wordWrap: "normal",
  //     whiteSpace: "normal",
  //     lineBreak: "auto",
  //   },
  //   // toolbarSecondary: {
  //   //   justifyContent: "space-between",
  //   //   overflowX: "auto",
  //   // },

  //   // toolbarLink: {
  //   //   padding: theme.spacing(1),
  //   //   flexShrink: 0,
  //   // },
  // }));

  // const classes = useStyles();
  //   const { sections, title } = props;
  // const { data } = props;

  // console.log("data from side nave bar ", data);

  return (
    <div>
      <nav>
        <div id="mySidenav" className="sidenav d-none d-md-block">
          <a href="#" id="instagram">
            <img
              src="instagram.png"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <a href="#" id="facebook">
            <img
              src="face-book.png"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <a href="#" id="twitter">
            <img src="twitter.png" style={{ width: "50px", height: "50px" }} />
          </a>
          <a href="#" id="youtube">
            <img src="youtube.png" style={{ width: "50px", height: "50px" }} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default SideNaveBar;
