const keyframes = {
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.05)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
};

const HeaderStyles = (theme) => ({
  navBar: {
    "& header": {
      backgroundColor: theme.colors.white,
      // transition: "all 0.2s ease-in-out",
    },

    fontWeight: 400,
    "&.white-bg": {
      // backgroundColor: theme.colors.white,
    },
    "& .content": {
      display: "flex",
      alignItems: "center",
      // padding: "8.5px 0px",
      backgroundColor: "#202237",
      height: "110px",
      "@media (min-width: 1367px)": {
        justifyContent: "space-between",
      },
      "& .navbar-logo": {
        padding: "10px 54px",
        backgroundColor: "rgba(32, 34, 55, 1)",
        "& svg": {
          display: "inline-block",
          height: 87,
        },
      },
      "& .navbar-logo-trans": {
        padding: "10px 54px",
        backgroundColor: "rgba(32, 34, 55, 0.2)",
        // backgroundColor: "transparent",
        "& svg": {
          display: "inline-block",
          height: 87,
        },
      },
      "& > nav": {
        // width: "calc(100% - 104.69px - 100px)",
        marginLeft: 20,
        display: "inline-flex",
        position: "relative",
        justifyContent: "flex-end",
        "& ul.mega-menu": {
          display: "flex",
          padding: 0,
          margin: 0,
          listStyleType: "none",
          gap: "16px",
          "& > li": {
            "&:not(:last-child)": {
              marginRight: 7,
            },
            "& > a": {
              // rootNavLnk

              padding: "5px 15px",
              display: "inline-block",
              "&:hover": {
                transform: "scale(1.1)", // Scale up by 10% on hover
              },
              "&.without-pointer-events": {
                pointerEvents: "none",
                // color: theme.colors.black,
                color: theme.colors.white,
                fontWeight: 400,
              },
            },
            "@global": {
              ...keyframes,
            },
            "& ul li a": {
              transition: "background-color .1s ease, transform .3s ease",
              borderRadius: 16,
              "&:hover": {
                backgroundColor: theme.colors.black,
                animation: "$pulse 1s infinite", // Apply the pulse animation
              },
            },

            "&.dropdown": {
              position: "relative",
              "& > a": {
                display: "flex",
                justifyContent: "center",
                position: "relative",
                alignItems: "center",
                "& svg": {
                  // dropdownCaret
                  fontSize: 22,
                  transition: "transform 500ms",
                  marginLeft: 5,
                },
              },
              "& ul.dropdown-menu, & ul.dropdown-menu-with-image-and-text, & ul.dropdown-menu-with-only-image":
                {
                  pointerEvents: "none",
                  visibility: "hidden",
                  opacity: 0,
                  listStyleType: "none",
                  position: "absolute",
                  top: "100%",
                  transform: "translateY(50px)",
                  left: 0,
                  // backgroundColor: theme.colors.white,
                  backgroundColor: "gray",
                  boxShadow: " 1px 12px 10px 3px rgba(0, 0, 0, 0.3)",
                  borderRadius: 16,
                  zIndex: 111,
                  transition: "0.4s all",
                },
              "& ul.dropdown-menu": {
                minWidth: 250,
                padding: 16,
                "& a": {
                  padding: "13px 0px 13px 20px",
                  fontWeight: 400,
                  color: theme.colors.white,
                },
              },
              "& ul.dropdown-menu-with-image-and-text, & ul.dropdown-menu-with-only-image":
                {
                  padding: 16,
                  "& li": {
                    "& a": {
                      display: "inline-flex",
                      alignItems: "center",
                      transition: "background-color .1s ease",
                      padding: "12px 0px 12px 0px",
                      "& .image-wrapper": {
                        "& img": {
                          width: "-webkit-fill-available !important",
                        },
                      },
                      "&:hover": {
                        backgroundColor: theme.colors.greyColor,
                      },
                    },
                  },
                },
              "& ul.dropdown-menu-with-image-and-text": {
                minWidth: 359,
                "& li": {
                  "& a": {
                    minWidth: 359,
                    "& .image-wrapper": {
                      flex: "0 0 20%",
                    },
                    "& span": {
                      flex: "0 0 80%",
                      display: "inline-block",
                      marginLeft: 20,
                    },
                  },
                },
              },
              "& ul.dropdown-menu-with-only-image": {
                minWidth: 300,
                "& li": {
                  "& a": {
                    width: "100%",
                    minWidth: 250,
                    "& .image-wrapper": {
                      flex: "0 0 45%",
                    },
                  },
                },
              },
              "&.Products-dropdown": {
                "& ul": {
                  "& li:nth-child(1)": {
                    "& a": {
                      padding: "18.7185px 0px 18.7185px 16px",
                    },
                  },
                  "& li:nth-child(2)": {
                    "& a": {
                      padding: "14.156px 0px 14.156px 16px",
                    },
                  },
                  "& li:nth-child(3)": {
                    "& a": {
                      padding: "14.2735px 0px 14.2735px 16px",
                      "& .image-wrapper": {
                        flex: "0 0 55%",
                      },
                    },
                  },
                  "& li:nth-child(4)": {
                    "& a": {
                      padding: "17.414px 0px 17.414px 16px",
                    },
                  },
                },
              },
              "&.Services-dropdown": {
                "& ul": {
                  "& li": {
                    "& a": {
                      padding: "12px 0px 12px 16px",
                      "& img": {
                        height: "50px !important",
                      },
                    },
                  },
                },
              },
              "&:hover": {
                "& > a": {
                  "&  svg": {
                    transform: "rotate(180deg)",
                  },
                },
                "& .dropdown-menu, .dropdown-menu-with-image-and-text, & ul.dropdown-menu-with-only-image":
                  {
                    pointerEvents: "auto",
                    visibility: "visible",
                    opacity: 1,
                    transform: "translateY(0px)",
                  },
              },
            },
            "& a": {
              display: "block",
              // color: theme.colors.primaryFont,
              color: theme.colors.white,
              fontWeight: 700,
              transition: "0.4s all",
              textDecoration: "none",
              ...theme.fonts.poppins.weight500,
              ...theme.fonts.poppins.smallText,
              textTransform: "capitalize",

              "& span": {
                "&.active": {
                  color: "rgba(254, 194, 16, 1)",
                  borderBottom: "3px solid rgba(254, 194, 16, 1)",
                  // paddingBottom: "29px",
                  paddingBottom: "10px",
                  ...theme.fonts.poppins.weight700,
                },
              },
            },
          },
        },
      },
      "& .buttonContainer": {
        display: "flex",
        alignItems: "flex-start",
        gap: "20px",
        marginLeft: "30px",
        "& button:nth-child(1)": {
          marginRight: 15,
          marginLeft: 15,
          paddingTop: "25px",
          paddingBottom: "0px",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
          marginTop: "-20px",
          height: "5.5rem",
        },

        "& .langDesc": {
          width: "187px",

          "& .langTitle": {
            color: "white",
            ...theme.fonts.poppins.weight600,
            ...theme.fonts.poppins.heading6,
          },

          "& .langText": {
            color: "white",
            ...theme.fonts.poppins.weight600,
            ...theme.fonts.poppins.labelText,
            marginTop: "-9px",
            marginLeft: "6px",
            borderTop: "1px solid ",
            width: "106px",
            paddingTop: "7px",
            display: "flex",
            alignItems: "center",
            width: "75px",
          },
        },
      },
    },
    "&.rtl-styles": {
      "& .content": {
        "& > nav": {
          "& ul.mega-menu": {
            "& > li": {
              "& a": {},
            },
          },
        },

        "& .buttonContainer": {
          // marginRight: "18px",
          marginLeft: "52px !important",

          "& button:nth-child(1)": {},

          "& .langDesc": {
            "& .langTitle": {},

            "& .langText": {},
          },
        },
      },
    },
  },

  drawerRoot: {
    "& .outside-navbar": {
      display: "flex",
      padding: "10px 15px",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row-reverse",
      backgroundColor: "#E6EEFF",
    },
    "& a": {
      "& svg": {
        width: 130,
        height: 62,
      },
    },
  },
  drawer: {
    "& .drawer-top-section": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      borderBottom: "1px solid #3333",
      backgroundColor: "rgba(32, 34, 55, 1)",
      "& .sydara-logo": {
        width: 130,
        height: 62,
      },
      "& .close-btn": {
        color: theme.colors.white,
      },
    },
    "& .navbar-items": {
      "& .menu-item-button": {
        width: "100%",
        // color: "black",
        color: theme.colors.black,
        textAlign: "start",
        padding: "15px 23px 15px 15px",
        borderRadius: "0 !important",
        "& *": {
          pointerEvents: "none",
        },
        "& .menu-item-title": {
          textTransform: "capitalize",
          "& span": {
            ...theme.fonts.poppins.weight500,
          },
        },
        "&:hover, &.active": {
          backgroundColor: theme.colors.primary,
          color: theme.colors.white,
          ...theme.fonts.poppins.weight700,
        },
      },
      "& .drawer-list": {
        // paddingLeft:"6px",
        background: "#d1d1d14a",
        "& a": {
          textDecoration: "none",
          color: theme.colors.black,
          width: "100%",
          textTransform: "capitalize",
          ...theme.fonts.poppins.weight500,
        },
      },
    },
    "& .buttonContainer": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      "& a": {
        width: "100% !important",
        textDecoration: "none",
        color: theme.colors.black,
        display: "block",
        textTransform: "capitalize",
        "& button": {
          width: "80% !important",
          margin: "auto",
          display: "block",
          marginTop: "16px",
        },
      },
    },
    "& .rtl-styles": {
      "& .navbar-items": {
        "& .menu-item-button": {
          "& .menu-item-title": {
            "& span": {
              ...theme.fonts.cairo.weight400,
            },
          },
        },
        "& .drawer-list": {
          "& a": {
            ...theme.fonts.cairo.weight400,
          },
        },
      },
      "& .buttonContainer": {
        "& a": {
          "& button": {
            ...theme.fonts.cairo.weight400,
          },
        },
      },
    },
  },
  mobileDrawerPaper: {
    width: "100% !important",
    // backgroundColor: "rgba(11, 11, 11, 0.7)",
  },
  tabletDrawerPaper: {
    width: "350px !important",
    // backgroundColor: "rgba(11, 11, 11, 0.7)",
  },
});

export default HeaderStyles;
