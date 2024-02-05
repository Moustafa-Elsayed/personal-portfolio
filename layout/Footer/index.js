import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import classNames from "classnames";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// *** Icons ***
import Phone from "@/assets/icons/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Envlope from "@/assets/icons/Envlope";
import Facebook from "@/assets/icons/Facebook";
import Twitter from "@/assets/icons/Twitter";
import LinkedIn from "@/assets/icons/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Whatsapp from "@/assets/icons/Whatsapp";
import Tiktok from "@/assets/icons/Tiktok";

// *** styles ***
import styles from "@/assets/styles/__layout/footer.styles";
import { createUseStyles } from "react-jss";
// *** components ***
import TextInputComponent from "@/components/Global/TextInputComponent";
import Image from "next/image";
import { Api_url, email_api } from "@/constant/Api";
import axios from "axios";
import { Poppins } from "next/font/google";

const fontPoppins700 = Poppins({ weight: "700", subsets: ["latin"] });

const fontPoppins400 = Poppins({ weight: "400", subsets: ["latin"] });
const useStyles = createUseStyles(styles);

function index({ data }) {
  const theme = useTheme();
  const isTablet = useMediaQuery("(max-width:1075px)");
  // const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const isMobile = useMediaQuery('(max-width:695px)');
  const classes = useStyles();
  const router = useRouter();
  const { locale } = router;
  // console.log('Current Route starts with "/services/":', router.asPath.startsWith("/services/"));
  const [email, setEmail] = useState();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("init");
  // fixed number regular exp..
  const phoneNumber = data?.footerData?.phone || "";
  const trimmedPhoneNumber = phoneNumber.trim();
  const formattedPhoneNumber = trimmedPhoneNumber.endsWith("+")
    ? `+${trimmedPhoneNumber.slice(0, -1)}`
    : trimmedPhoneNumber;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const HandleSubmitData = async () => {
    setError("");
    const url = Api_url + email_api;

    const bodyData = {
      email,
    };

    const config = {
      headers: {
        lang: locale,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.post(url, bodyData, config);
      setMessage(res?.data?.data);
      handleClickOpen();
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };

  return (
    <footer
      className={classNames(classes.footer, {
        "footer-without-contentBox": router.route !== "/",
      })}
      style={{
        backgroundImage: `url(${data?.footerData?.footer_bg})`,
      }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: fontPoppins700,
            fontSize: "64px",
            backgroundColor: "rgba(32, 34, 55, 1)",
          }}
        >
          <DialogContentText
            sx={{
              margin: "15px 50px",
              maxWidth: "600px",
              color: "black",
              fontSize: "32px",
              lineHeight: "40px",
              textAlign: "center",
              color: "white",
              fontWeight: fontPoppins400,
            }}
            id="alert-dialog-description"
          >
            {message}
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <section className="inside">
        <Container maxWidth="xl">
          <div
            className={classNames("main-content", {
              "rtl-styles": locale === "ar",
            })}
          >
            {isTablet ? (
              <>
                {isMobile ? (
                  <>
                    {/* mobile content */}
                    <div className="upper-content3">
                      <div className="logo-section">
                        {/* <SydaraLogo /> */}
                        <Image
                          width={239}
                          height={114}
                          alt={data?.footerData?.SiteNmae}
                          src={data?.footerData?.footer_logo}
                          // src={"https://svgshare.com/i/yS9.svg"}
                        />
                        <p className="description">
                          {data?.footerData?.description}
                        </p>
                        <Box className="iconWithTxt">
                          <Box className="icon-inside">
                            <EmailIcon sx={{ color: "#FFDF38" }} />
                          </Box>
                          <a
                            style={{ color: "white", textDecoration: "none" }}
                            href="mailto:example@example.com"
                          >
                            {data?.footerData?.email}
                          </a>
                          {/* <p>{data?.footerData?.email}</p> */}
                        </Box>
                        <div className="iconWithTxt">
                          <div className="icon-inside">
                            <Phone sx={{ color: "#FFDF38" }} />
                          </div>
                          <a
                            style={{
                              color: "white",
                              textDecoration: "none",
                            }}
                            href={`tel:${data?.footerData?.phone}`}
                          >
                            {/* {data?.footerData?.phone} */}
                            {formattedPhoneNumber}
                          </a>
                          {/* <p>{data?.footerData?.phone}</p> */}
                        </div>
                      </div>

                      <div className="call-to-action">
                        <div className="ManyTitles">
                          <div className="text-list">
                            <p>{data?.footerData?.solutionsTitle}</p>
                            <ul>
                              <ul>
                                {data?.navbarData?.map((item) =>
                                  item.children.length > 0 ? null : (
                                    <li key={item.id}>
                                      <Link
                                        href={{
                                          pathname: `${item?.path}`,
                                        }}
                                      >
                                        {item.title}
                                      </Link>{" "}
                                    </li>
                                  )
                                )}
                              </ul>
                            </ul>
                          </div>
                          <div className="text-list">
                            <p>{data?.footerData?.servicesTitle}</p>

                            <ul>
                              {data?.services?.map((item) => (
                                <li key={item.id}>
                                  <Link
                                    href={{
                                      pathname: router.asPath.startsWith(
                                        "/services/"
                                      )
                                        ? `services/${item?.id}/${item?.path}`
                                        : `services/services/${item?.id}/${item?.path}`,
                                    }}
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="rightContent">
                          <p className="getInTouchTitle">
                            {data?.footerData?.in_toutch}
                          </p>
                          <div className="inputwithBtn">
                            <TextInputComponent
                              value={email}
                              onchange={(e) => handleEmailChange(e)}
                              placeholder={data?.footerData?.email_address}
                            />
                            <Button
                              sx={{
                                backgroundColor: "rgba(255, 223, 56, 1)",
                                color: "black",
                                fontSize: "16px",
                                textTransform: "none",
                                fontWeight: "600",
                                ":hover": {
                                  backgroundColor: "rgba(255, 223, 56, 1)",
                                },
                              }}
                              variant="contained"
                              onClick={HandleSubmitData}
                            >
                              {data?.footerData?.join}
                            </Button>
                          </div>
                          <span style={{ color: "red" }}>{error}</span>
                          <p className="followusTitle">
                            {data?.footerData?.follow_us}
                          </p>
                          <div className="down-content">
                            <ul>
                              <li className="social-icon">
                                <a
                                  href={`${data?.footerData?.facebookLink}`}
                                  target="_blank"
                                >
                                  <Facebook fill="white" />
                                </a>
                              </li>
                              <li className="social-icon">
                                <a
                                  href={`${data?.footerData?.linkedInLink}`}
                                  target="_blank"
                                >
                                  <LinkedIn fill="white" />
                                </a>
                              </li>
                              <li className="social-icon">
                                <a
                                  href={`https://api.whatsapp.com/send?phone=${data.footerData.phone}&text=hello`}
                                  target="_blank"
                                >
                                  <Whatsapp />
                                </a>
                              </li>
                              <li className="social-icon">
                                <a
                                  href={`${data?.footerData?.twitterLink}`}
                                  target="_blank"
                                >
                                  <Twitter fill="white" />
                                </a>
                              </li>
                              <li className="social-icon">
                                <a
                                  href={`${data?.footerData?.instagramLink}`}
                                  target="_blank"
                                >
                                  <InstagramIcon
                                    sx={{
                                      color: "white",
                                    }}
                                  />
                                </a>
                              </li>
                              <li className="social-icon">
                                <a
                                  href={`${data?.footerData?.tiktokLink}`}
                                  target="_blank"
                                >
                                  <Tiktok
                                    sx={{
                                      color: "white",
                                    }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* tablet content */}
                    <div className="upper-content3">
                      <div className="logo-section">
                        {/* <SydaraLogo /> */}
                        <Image
                          width={239}
                          height={114}
                          alt={data?.footerData?.SiteNmae}
                          src={data?.footerData?.footer_logo}
                          // src={"https://svgshare.com/i/yS9.svg"}
                        />
                        <p className="description">
                          {data?.footerData?.description}
                        </p>
                        <div className="iconWithTxt">
                          <div className="icon-inside">
                            <EmailIcon sx={{ color: "#FFDF38" }} />
                          </div>
                          <a
                            style={{ color: "white", textDecoration: "none" }}
                            href="mailto:example@example.com"
                          >
                            {data?.footerData?.email}
                          </a>

                          {/* <p>{data?.footerData?.email}</p> */}
                        </div>
                        <div className="iconWithTxt">
                          <div className="icon-inside">
                            <Phone sx={{ color: "rgba(254, 194, 16, 1)" }} />
                          </div>
                          <a
                            style={{
                              color: "white",
                              textDecoration: "none",
                            }}
                            href={`tel:${data?.footerData?.phone}`}
                          >
                            {/* {data?.footerData?.phone} */}
                            { formattedPhoneNumber }
                          </a>

                          {/* <p>{data?.footerData?.phone}</p> */}
                        </div>
                      </div>

                      <div className="call-to-action">
                        <div className="ManyTitles">
                          <div className="text-list">
                            <p>{data?.footerData?.solutionsTitle}</p>
                            <ul>
                              {data?.navbarData?.map((item) =>
                                item.children.length > 0 ? null : (
                                  <li key={item.id}>
                                    <Link
                                      href={{
                                        pathname: `${item?.path}`,
                                      }}
                                    >
                                      {item.title}
                                    </Link>{" "}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div className="text-list">
                            <p>{data?.footerData?.servicesTitle}</p>

                            <ul>
                              {data?.services?.map((item) => (
                                <li key={item.id}>
                                  <Link
                                    href={{
                                      pathname: router.asPath.startsWith(
                                        "/services/"
                                      )
                                        ? `services/${item?.id}/${item?.path}`
                                        : `services/services/${item?.id}/${item?.path}`,
                                    }}
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="rightContent">
                          <p className="getInTouchTitle">
                            {data?.footerData?.in_toutch}
                          </p>
                          <div className="inputwithBtn">
                            <TextInputComponent
                              value={email}
                              onchange={(e) => handleEmailChange(e)}
                              placeholder={data?.footerData?.email_address}
                            />
                            <Button
                              sx={{
                                backgroundColor: "rgba(255, 223, 56, 1)",
                                color: "black",
                                fontSize: "16px",
                                textTransform: "none",
                                fontWeight: "600",
                                ":hover": {
                                  backgroundColor: "rgba(255, 223, 56, 1)",
                                },
                              }}
                              variant="contained"
                              onClick={HandleSubmitData}
                            >
                              {data?.footerData?.join}
                            </Button>
                          </div>
                          <span style={{ color: "red" }}>{error}</span>
                          <p className="followusTitle">
                            {data?.footerData?.follow_us}
                          </p>
                          <div className="down-content">
                            <ul>
                              <li className="social-icon">
                                <a
                                  href={`${data?.footerData?.facebookLink}`}
                                  target="_blank"
                                >
                                  <Facebook fill="white" />
                                </a>
                              </li>
                              <li className="social-icon">
                                <a
                                  href={`${data?.footerData?.linkedInLink}`}
                                  target="_blank"
                                >
                                  <LinkedIn fill="white" />
                                </a>
                              </li>
                              <li className="social-icon">
                                <a
                                  href={`https://api.whatsapp.com/send?phone=${data.footerData.phone}&text=hello`}
                                  target="_blank"
                                >
                                  <Whatsapp />
                                </a>
                              </li>
                              <li className="social-icon">
                                <a
                                  href={`${data?.footerData?.twitterLink}`}
                                  target="_blank"
                                >
                                  <Twitter fill="white" />
                                </a>
                              </li>
                              <li className="social-icon">
                                <a
                                  href={`${data?.footerData?.instagramLink}`}
                                  target="_blank"
                                >
                                  <InstagramIcon
                                    sx={{
                                      color: "white",
                                    }}
                                  />
                                </a>
                              </li>
                              <li className="social-icon">
                                <a
                                  href={`${data?.footerData?.tiktokLink}`}
                                  target="_blank"
                                >
                                  <Tiktok
                                    sx={{
                                      color: "white",
                                    }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              // web content
              <>
                <div className="upper-content">
                  <div className="logo-section">
                    {/* <SydaraLogo /> */}
                    <Image
                      width={350}
                      height={180}
                      alt={data?.footerData?.SiteNmae}
                      src={data?.footerData?.footer_logo}
                      // src={"https://svgshare.com/i/yS9.svg"}
                    />
                    <p className="description">
                      {data?.footerData?.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "5px",
                        flexDirection: "column",
                      }}
                    >
                      <div className="iconWithTxt">
                        <div className="icon-inside">
                          <Phone sx={{ color: "rgba(254, 194, 16, 1)" }} />
                        </div>
                        <a
                          style={{
                            color: "white",
                            textDecoration: "none",
                          }}
                          href={`tel:${data?.footerData?.phone}`}
                        >
                          {/* {data?.footerData?.phone} */}
                          { formattedPhoneNumber }
                        </a>

                        {/* <p>{data?.footerData?.phone}</p> */}
                      </div>
                      <div className="iconWithTxt">
                        <div className="icon-inside">
                          <EmailIcon sx={{ color: "#FFDF38" }} />
                        </div>
                        <a
                          style={{ color: "white", textDecoration: "none" }}
                          href="mailto:example@example.com"
                        >
                          {data?.footerData?.email}
                        </a>

                        {/* <p>{data?.footerData?.email}</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="call-to-action">
                    <div className="text-list">
                      <p>{data?.footerData?.solutionsTitle}</p>
                      <ul>
                        {data?.navbarData?.map((item) =>
                          item.children.length > 0 ? null : (
                            <li key={item.id}>
                              <Link
                                href={{
                                  pathname: `${item?.path}`,
                                }}
                              >
                                {item.title}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="text-list">
                      <p>{data?.footerData?.servicesTitle}</p>

                      <ul>
                        {data?.services?.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={{
                                pathname: router.asPath.startsWith("/services/")
                                  ? `services/${item?.id}/${item?.path}`
                                  : `services/services/${item?.id}/${item?.path}`,
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rightContent">
                      <p className="getInTouchTitle">
                        {data?.footerData?.in_toutch}
                      </p>
                      <div className="inputwithBtn">
                        <TextInputComponent
                          value={email}
                          onchange={(e) => handleEmailChange(e)}
                          placeholder={data?.footerData?.email_address}
                        />
                        <Button
                          sx={{
                            backgroundColor: "rgba(255, 223, 56, 1)",
                            color: "black",
                            fontSize: "16px",
                            textTransform: "none",
                            fontWeight: "600",
                            ":hover": {
                              backgroundColor: "rgba(255, 223, 56, 1)",
                            },
                          }}
                          onClick={HandleSubmitData}
                          variant="contained"
                        >
                          {data?.footerData?.join}
                        </Button>
                      </div>
                      <span style={{ color: "red" }}>{error}</span>
                      <p className="followusTitle">
                        {data?.footerData?.follow_us}
                      </p>
                      <div className="down-content">
                        <ul>
                          <li className="social-icon">
                            <a
                              href={`${data?.footerData?.facebookLink}`}
                              target="_blank"
                            >
                              <Facebook fill="white" />
                            </a>
                          </li>
                          <li className="social-icon">
                            <a
                              href={`${data?.footerData?.linkedInLink}`}
                              target="_blank"
                            >
                              <LinkedIn fill="white" />
                            </a>
                          </li>
                          <li className="social-icon">
                            <a
                              href={`https://api.whatsapp.com/send?phone=${data.footerData.phone}&text=hello`}
                              target="_blank"
                            >
                              <Whatsapp />
                            </a>
                          </li>
                          <li className="social-icon">
                            <a
                              href={`${data?.footerData?.twitterLink}`}
                              target="_blank"
                            >
                              <Twitter fill="white" />
                            </a>
                          </li>
                          <li className="social-icon">
                            <a
                              href={`${data?.footerData?.instagramLink}`}
                              target="_blank"
                            >
                              <InstagramIcon
                                sx={{
                                  color: "white",
                                }}
                              />
                            </a>
                          </li>
                          <li className="social-icon">
                            <a
                              href={`${data?.footerData?.tiktokLink}`}
                              target="_blank"
                            >
                              <Tiktok
                                sx={{
                                  color: "white",
                                }}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </Container>
      </section>
    </footer>
  );
}

export default memo(index);
