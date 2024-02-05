import React from "react";
import { createUseStyles } from "react-jss";
import { titlecomponentstyles } from "@/assets/styles/__components/titlecomponent.styles";

const useStyles = createUseStyles(titlecomponentstyles);

const TitleComponent = ({ title, textcolor }) => {
  const classes = useStyles();

  // Conditionally set the text color
  const textColorStyle =
    textcolor === "black" ? { color: "#202237" } : textcolor === "white" ? { color: "#fff" } : {};

  return (
    <div className={classes.root} style={textColorStyle}>
      <span>{title}</span>
    </div>
  );
};

export default TitleComponent;
