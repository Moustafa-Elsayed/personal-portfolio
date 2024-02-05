const FooterStyles = (theme) => ({
  footer: {
    listStyle: "none",
    // background: `url('https://svgshare.com/i/11nN.svg') no-repeat`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    zIndex: "0",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: "rgb(0 0 0 / 79%)",
      pointerEvents: "none",
      zIndex: "-1", // Set a lower z-index for the overlay to be behind the footer
    },

    "& .inside": {
      // backgroundColor: "rgba(0, 0, 0, 0.89)",

      "& .main-content": {
        paddingTop: 30,
        "@media (max-width: 1600px)": {
          paddingBottom: 25,
        },
        "@media (max-width: 900px)": {
          paddingTop: 30,
        },
        "@media (max-width: 600px)": {
          paddingBottom: 30,
        },
        "& ul": {
          listStyle: "none",
          padding: 0,
          margin: 0,
        },
        "& .upper-content": {
          display: "flex",
          gap: "55px",
          // marginBottom: 25,
          marginTop: "-1rem",
          borderBottom: "1px solid #484545",
          paddingBottom: "42px",
          "& .logo-section": {
            flex: "0 0 30%",
            display: "flex",
            gap: "50px",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "-2.5rem",
            // scale: "0.8",
            "& svg": {
              maxWidth: 260,
            },
            "& .description": {
              marginTop: "-8px",
              color: theme.colors.white,
              ...theme.fonts.poppins.weight400,
              ...theme.fonts.poppins.labelText,
            },
            "& .iconWithTxt": {
              display: "flex",
              alignItems: "center",
              // color: theme.colors.white,
              color: theme.colors.white,
              ...theme.fonts.poppins.weight400,
              ...theme.fonts.poppins.heading6,
              "& .icon-inside": {
                marginRight: 10,
                marginTop: "10px",
              },
              "& p": {
                marginBottom: 25,
                color: theme.colors.white,
                ...theme.fonts.poppins.weight400,
                ...theme.fonts.poppins.heading6,
              },
            },
          },
          "& .call-to-action": {
            flex: "0 0 65%",
            listStyle: "none",
            display: "flex",
            gap: "55px",
            justifyContent: "Space-around",
            alignItems: "flex-start",
            "& .text-list": {
              display: "flex",
              flexDirection: "column",
              height: "100%",
              "& p": {
                width: "207px",
                color: theme.colors.white,
                ...theme.fonts.poppins.weight700,
                ...theme.fonts.poppins.heading5,
                textTransform: "capitalize",
              },
              "& li": {
                marginTop: "21px",
                "& a": {
                  textDecoration: "none",
                  color: theme.colors.white,
                  ...theme.fonts.poppins.weight400,
                  ...theme.fonts.poppins.heading6,
                },
              },
            },
            "& .rightContent": {
              // marginTop:"-11rem",
              "& .getInTouchTitle": {
                color: theme.colors.white,
                ...theme.fonts.poppins.weight700,
                ...theme.fonts.poppins.heading5,
                textTransform: "capitalize",
              },
              "& .inputwithBtn": {
                display: "flex",
                paddingTop: "11px",
              },
              "& .down-content": {
                borderTop: "none !important",
                paddingTop: "0px !important",
              },
            },
            "& .followusTitle": {
              color: theme.colors.white,
              ...theme.fonts.poppins.weight400,
              ...theme.fonts.poppins.heading6,
              textTransform: "capitalize",
              marginTop: "6rem",
            },
          },
        },
        "& .upper-content2": {
          display: "flex",
          flexDirection: "column",
          marginBottom: 25,
          "& .logo-section": {
            flex: "0 0 30%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            "& img": {
              // scale: "0.7",
              maxWidth: 260,
            },
          },
          "& .call-to-action": {
            flex: "0 0 70%",
            listStyle: "none",
            display: "flex",
            justifyContent: "Space-around",
            alignItems: "center",
            "& .text-list": {
              color: theme.colors.white,
              ...theme.fonts.poppins.weight400,
              ...theme.fonts.poppins.heading6,
            },
            "& .rightContent": {
              "& .iconWithTxt": {
                display: "flex",
                alignItems: "center",
                color: theme.colors.white,
                ...theme.fonts.poppins.weight400,
                ...theme.fonts.poppins.heading6,
                "& .icon-inside": {
                  marginRight: 10,
                },
                "& p": {
                  marginBottom: 25,
                  ...theme.fonts.poppins.heading6,
                },
              },
              "& .inputwithBtn": {
                display: "flex",
              },
            },
          },
        },
        "& .upper-content3": {
          display: "flex",
          flexDirection: "column",
          marginBottom: 25,
          "& .logo-section": {
            flex: "0 0 30%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            "& img": {
              // scale: "0.6",
              // maxWidth: 260,
            },
            "& .description": {
              marginTop: "49px",
              color: theme.colors.white,
              ...theme.fonts.poppins.weight400,
              ...theme.fonts.poppins.heading6,
              textAlign: "center",
              lineHeight: "27px",
            },
          },
          "& .iconWithTxt": {
            display: "flex",
            alignItems: "center",
            color: theme.colors.white,
            ...theme.fonts.poppins.weight400,
            ...theme.fonts.poppins.heading6,
            "& .icon-inside": {
              marginRight: 10,
            },
            "& p": {
              marginBottom: 25,
              color: theme.colors.white,
              ...theme.fonts.poppins.weight400,
              ...theme.fonts.poppins.heading6,
            },
          },
          "& .call-to-action": {
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            "& .ManyTitles": {
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              marginBottom: "1rem",
              "& .text-list": {
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                alignItems: "flex-start",
                color: theme.colors.white,
                ...theme.fonts.poppins.weight400,
                ...theme.fonts.poppins.smallText,
                "& p": {
                  color: theme.colors.white,
                  ...theme.fonts.poppins.weight700,
                  ...theme.fonts.poppins.heading6,
                  textTransform: "capitalize",
                },
                "& li": {
                  marginTop: "14px",
                  "& a": {
                    textDecoration: "none",
                    color: theme.colors.white,
                    ...theme.fonts.poppins.weight400,
                    ...theme.fonts.poppins.heading6,
                  },
                },
              },
            },
            "& .rightContent": {
              "& .getInTouchTitle": {
                color: theme.colors.white,
                ...theme.fonts.poppins.weight700,
                ...theme.fonts.poppins.heading6,
                textTransform: "capitalize",
              },
              "& .followusTitle": {
                color: theme.colors.white,
                ...theme.fonts.poppins.weight400,
                ...theme.fonts.poppins.heading6,
                textTransform: "capitalize",
                marginTop: "3rem",
              },
              "& .down-content": {
                borderTop: "none !important",
                paddingTop: "0px !important",
              },
              "& .inputwithBtn": {
                display: "flex",
              },
            },
          },
        },
        "& .down-content": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 25,
          borderTop: `solid 1px #b2b2b2`,
          "& ul": {
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            marginTop: "30px",
            "& .social-icon": {
              marginRight: 35,
            },
          },
        },
        "& .down-content2": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 25,
          borderTop: `solid 1px #b2b2b2`,
          flexDirection: "column",
          "& ul": {
            display: "flex",

            "& .social-icon": {
              marginRight: 10,
            },
          },
        },
      },
    },
    "& .rtl-styles": {
      "& .upper-content": {
        "& .logo-section": {
          "& .description": {
            fontFamily: `${theme.fonts.cairo.weight400.fontFamily} !important`,
            ...theme.fonts.cairo.heading6,
            important: true,
            direction: "rtl",
          },
          "& .iconWithTxt": {
            color: theme.colors.white,
            ...theme.fonts.poppins.weight400,
            ...theme.fonts.poppins.heading6,
            "& p": {
              fontFamily: `${theme.fonts.cairo.weight400.fontFamily} !important`,
              ...theme.fonts.cairo.heading6,
            },
          },
        },
        "& .call-to-action": {
          "& .text-list": {
            "& p": {
              fontFamily: `${theme.fonts.cairo.weight700.fontFamily} !important`,
              ...theme.fonts.cairo.heading5,
            },
            "& li": {
              "& a": {
                fontFamily: `${theme.fonts.cairo.weight400.fontFamily} !important`,
                ...theme.fonts.cairo.heading6,
              },
            },
          },
          "& .rightContent": {
            "& .getInTouchTitle": {
              fontFamily: `${theme.fonts.cairo.weight700.fontFamily} !important`,
              ...theme.fonts.cairo.heading5,
            },
          },
          "& .followusTitle": {
            fontFamily: `${theme.fonts.cairo.weight400.fontFamily} !important`,
            ...theme.fonts.cairo.heading6,
          },
        },
      },
      "& .upper-content2": {
        "& .call-to-action": {
          "& .text-list": {
            fontFamily: `${theme.fonts.cairo.weight400.fontFamily} !important`,
            ...theme.fonts.cairo.heading6,
          },
          "& .rightContent": {
            "& .iconWithTxt": {
              color: theme.colors.white,
              ...theme.fonts.poppins.weight400,
              ...theme.fonts.poppins.heading6,
              "& p": {
                fontFamily: `${theme.fonts.cairo.weight400.fontFamily} !important`,
                ...theme.fonts.cairo.heading6,
              },
            },
          },
        },
      },
      "& .upper-content3": {
        "& .logo-section": {
          "& .description": {
            fontFamily: `${theme.fonts.cairo.weight400.fontFamily} !important`,
            ...theme.fonts.cairo.heading6,
          },
        },
        "& .iconWithTxt": {
          color: theme.colors.white,
          ...theme.fonts.poppins.weight400,
          ...theme.fonts.poppins.heading6,
          "& p": {
            fontFamily: `${theme.fonts.cairo.weight400.fontFamily} !important`,
            ...theme.fonts.cairo.heading6,
          },
        },
        "& .call-to-action": {
          "& .ManyTitles": {
            "& .text-list": {
              fontFamily: `${theme.fonts.cairo.weight400.fontFamily} !important`,
              ...theme.fonts.cairo.smallText,
              "& p": {
                fontFamily: `${theme.fonts.cairo.weight700.fontFamily} !important`,
                ...theme.fonts.cairo.heading6,
              },
              "& li": {
                "& a": {
                  fontFamily: `${theme.fonts.cairo.weight400.fontFamily} !important`,
                  ...theme.fonts.cairo.heading6,
                },
              },
            },
          },
          "& .rightContent": {
            "& .getInTouchTitle": {
              fontFamily: `${theme.fonts.cairo.weight700.fontFamily} !important`,
              ...theme.fonts.cairo.heading6,
            },
            "& .followusTitle": {
              fontFamily: `${theme.fonts.cairo.weight400.fontFamily} !important`,
              ...theme.fonts.cairo.heading6,
            },
          },
        },
      },
    },
  },
});

export default FooterStyles;
