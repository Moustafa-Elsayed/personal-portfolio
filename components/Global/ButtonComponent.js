import React from "react";
// style
// import "../../assets/Styles/ButtonComponent.scss";
import { Button } from "@mui/material";

export const HeaderButton = ({
  loading,
  title,
  onPress,
  width,
  borderRaduis,
  size,
}) => {
  return (
    <Button
      onClick={onPress}
      sx={{
        backgroundColor: "#FECB00",
        color: "#005293",
        fontSize: size,
        textTransform: "none",
        fontWeight: "600",
        width: width,
        ":hover": {
          backgroundColor: "#FECB00",
        },
      }}
      variant="contained"
      loading={loading}
    >
      {title}
    </Button>
  );
};

export const SecondHeaderButton = ({
  loading,
  title,
  onPress,
  width,
  borderRaduis,
  marginTop,
  size,
}) => {
  return (
    <Button
      onClick={onPress}
      sx={{
        backgroundColor: "#005293",
        fontSize: size,
        textTransform: "none",
        fontWeight: "600",
        width: width,
        borderRadius: borderRaduis,
        marginTop: marginTop,
        textTransform: "capitalize",
        ":hover": {
          backgroundColor: "#005293",
        },
      }}
      variant="contained"
      loading={loading}
      type={"submit"}
    >
      {title}
    </Button>
  );
};

export const PrimaryButton = ({
  loading,
  title,
  onPress,
  width,
  borderRaduis,
}) => {
  return (
    <Button
      onClick={onPress}
      sx={{
        backgroundColor: "#FECB00",
        color: "#005293",
        fontSize: "16px",
        textTransform: "none",
        fontWeight: "600",
        width: width,
        ":hover": {
          backgroundColor: "#FECB00",
        },
      }}
      variant="contained"
      loading={loading}
    >
      {title}
    </Button>
  );
};

export const SecondryButton = ({
  loading,
  title,
  onPress,
  width,
  borderRaduis,
  marginTop,
}) => {
  return (
    <Button
      onClick={onPress}
      sx={{
        backgroundColor: "#005293",
        fontSize: "16px",
        textTransform: "none",
        fontWeight: "600",
        width: width,
        borderRadius: borderRaduis,
        marginTop: marginTop,
        textTransform: "capitalize",
        fontFamily: "inherit",
        ":hover": {
          backgroundColor: "#005293",
        },
      }}
      variant="contained"
      loading={loading}
      type={"submit"}
    >
      {title}
    </Button>
  );
};

export const BlackButton = ({ title, onClick, width, borderRaduis, size }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 1)",
        color: "rgba(255, 255, 255, 1)",
        fontSize: size,
        textTransform: "none",
        width: width,
        borderRadius: borderRaduis,
        fontFamily:"inherit",
        ":hover": {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
      variant="contained"
    >
      {title}
    </Button>
  );
};

export const WhiteButton = ({ title, onClick, width, borderRaduis, size }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        color: "rgba(0, 0, 0, 1)",
        fontSize: size,
        textTransform: "none",
        width: width,
        borderRadius: borderRaduis,
        fontFamily:"inherit",
        ":hover": {
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        },
      }}
      variant="contained"
    >
      {title}
    </Button>
  );
};
export const YellowButton = ({ title, onclick, width, borderRaduis, size }) => {
  return (
    <Button
      onClick={onclick}
      type="submit"
      sx={{
        backgroundColor: "rgba(254, 194, 16, 1)",
        color: "rgba(0, 0, 0, 1)",
        fontSize: size,
        textTransform: "none",
        width: width,
        borderRadius: borderRaduis,
        fontFamily:"inherit",
        ":hover": {
          backgroundColor: "rgba(254, 194, 16, 0.75)",
        },
      }}
      variant="contained"
    >
      {title}
    </Button>
  );
};
