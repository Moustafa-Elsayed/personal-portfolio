"use client";
import React, { memo, Fragment, useState, useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import NavBarDrawer from "@/components/Header/NavBarDrawer/NavBarDrawer";
import NavBarSideDrawer from "@/components/Header/NavBarSideDrawer/NavBarSideDrawer";
const index = ({data}) => {
  const theme = useTheme();
  // const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery("(max-width:1250px)");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isTablet ? (
        <NavBarSideDrawer data={data} />
      ) : (
        <NavBarDrawer data={data} />
      )}
    </>
  );
};

export default memo(index);
