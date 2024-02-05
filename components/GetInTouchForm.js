import React, { useState, memo, useCallback } from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Avatar,
  AvatarGroup,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import Box from "@mui/material/Box";
import { Api_url, Touch_Api } from "@/constant/Api";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import { Poppins } from "next/font/google";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const fontPoppins700 = Poppins({ weight: "700", subsets: ["latin"] });

const fontPoppins400 = Poppins({ weight: "400", subsets: ["latin"] });

function GetInTouchForm({ data, isMobile, locale, validation, reviews }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  const handleSubmitValidation = useCallback(() => {
    setError(null);
    // Your validation logic for email and phone here
    if (!email && !phone) {
      setError("Please enter either email or phone number");
      return;
    }

    HandleSubmitData();
  }, [email, phone]);

  // const HandleSubmitData = async () => {
  //   const url = Api_url + Touch_Api;

  //   const bodyData = {
  //     email,
  //     phone,
  //   };

  //   const config = {
  //     headers: {
  //       lang: locale,
  //       Accept: 'application/json',
  //     },
  //   };
  //   try {
  //     const res = await axios.post(url, bodyData, config);
  //     handleClickOpen();
  //     console.log(res?.data?.data);
  //     setResponseMessage(res?.data?.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // console.log(reviews, "revi....");
  // const [email, setEmail] = useState();
  // const [phone, setPhone] = useState();
  // const [error, setError] = useState();
  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [activeElement, setActiveElement] = useState("");

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // const handleSubmitValidation = () => {
  //   setError(null);
  //   HandleSubmitData();
  // };

  // const handleSubmitValidation = useCallback(() => {
  //   setError(null);
  //   HandleSubmitData();
  // }, []);

  const HandleSubmitData = async () => {
    const url = Api_url + Touch_Api;

    const bodyData = {
      email,
      phone,
    };

    const config = {
      headers: {
        lang: locale,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.post(url, bodyData, config);
      handleClickOpen();
      console.log(res?.data?.data);
      setResponseMessage(res?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  const [anchorElArray, setAnchorElArray] = useState(
    Array(reviews?.Review.length).fill(null)
  );

  const handlePopoverOpen = (event, index, item) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(newAnchorElArray);
    handleShowDescription(item);
  };

  const handlePopoverClose = (index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = null;
    setAnchorElArray(newAnchorElArray);
  };

  const handleShowDescription = (item) => {
    setActiveElement(item?.photo);
  };
  const handlePopoverToggle = (event, index, item) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(newAnchorElArray);
  };

  return (
    <>
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
          <CheckIcon
            sx={{
              borderRadius: "20px",
              padding: 1,
              border: "1px solid rgba(255, 255, 255, 1)",
              color: "green",
            }}
          />
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
            {responseMessage}
          </DialogContentText>
        </DialogContent>
      </Dialog>
      {/* <Box sx={{ display: "flex", alignItems: "center" }}>
        <MailIcon sx={{ color: "black", mr: 2, my: 2 }} />
        <TextField
          label={data?.Form_EmailAddress}
          fullWidth
          sx={{
            background: "rgba(255, 255, 255, 1)",
            fontFamily: "inherit",
          }}
          placeholder="your Email"
        />
      </Box>
      <span className="line"></span>
      <span className="line2"></span>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 5,
          paddingBottom: isMobile ? "10px" : "65px",
        }}
      >
        <PhoneIcon sx={{ color: "black", mr: 2, my: 2 }} />
        <TextField
          label={data?.Form_MobileNum}
          placeholder="mobile number"
          fullWidth
          sx={{
            background: "rgba(255, 255, 255, 1)",
            fontFamily: "inherit",
          }}
        />
      </Box>
      <Button
        onClick={handleSubmitValidation}
        sx={{
          backgroundColor: "rgba(57, 60, 84, 1)",
          color: "white",
          fontSize: 24,
          textTransform: "none",
          width: 284,
          borderRadius: "13px",
          fontFamily: "inherit",
          marginTop: "71px",
          ":hover": {
            backgroundColor: "rgba(57, 60, 84, 1)",
          },
        }}
        variant="contained"
        endIcon={
          <Image
            width={30}
            height={10}
            src="https://svgshare.com/i/yZo.svg"
            alt="endIcon"
          />
        }
      >
        {data?.title}
      </Button>
      {error && <span style={{ color: "red" }}>{error}</span>} */}

      {/* Email Input */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MailIcon sx={{ color: "black", mr: 2, my: 2 }} />
        <TextField
          label={data?.Form_EmailAddress}
          fullWidth
          sx={{
            background: "rgba(255, 255, 255, 1)",
            fontFamily: "inherit",
          }}
          placeholder="your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>

      {/* Phone Input */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 5,
          paddingBottom: isMobile ? "10px" : "15px",
        }}
      >
        <PhoneIcon sx={{ color: "black", mr: 2, my: 2 }} />
        <TextField
          label={data?.Form_MobileNum}
          placeholder="mobile number"
          fullWidth
          sx={{
            background: "rgba(255, 255, 255, 1)",
            fontFamily: "inherit",
          }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Box>
      <span className="line"></span>
      <span className="line2"></span>

      {error && (
        <div style={{ color: "red", marginTop: "5px", marginLeft: "37px" }}>
          {error}
        </div>
      )}

      {/* Submit Button */}
      <Button
        onClick={handleSubmitValidation}
        sx={{
          backgroundColor: "rgba(57, 60, 84, 1)",
          color: "white",
          fontSize: 24,
          textTransform: "none",
          width: 250,
          borderRadius: "13px",
          fontFamily: "inherit",
          marginTop: "71px",
          marginLeft: isMobile ? "" : "33px",
          ":hover": {
            backgroundColor: "rgba(57, 60, 84, 1)",
          },
        }}
        variant="contained"
        endIcon={
          <Image
            width={30}
            height={10}
            src="https://svgshare.com/i/yZo.svg"
            alt="endIcon"
          />
        }
      >
        {data?.title}
      </Button>
      <div className="lastDescContainer">
        {reviews?.Review.map((item, index) => (
          <>
            {item.photo === activeElement && (
              <div className="desc" key={index} >
                {item?.description}
              </div>
            )}
          </>
        ))}
        <div className="imgs">
          <AvatarGroup max={6}>
            {reviews?.Review.map((item, index) => (
              <React.Fragment key={index}>
                <Avatar
                  alt={item?.name}
                  src={item?.photo}
                  style={{ marginLeft: "-13px" }}
                  onClick={(event) => handlePopoverOpen(event, index, item)}
                  // onMouseLeave={() => handlePopoverClose(index)}
                />
                <Popover
                  open={Boolean(anchorElArray[index])}
                  anchorEl={anchorElArray[index]}
                  onClose={() => handlePopoverClose(index)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  // transformOrigin={{
                  //   vertical: "top",
                  //   horizontal: "left",
                  // }}
                 
                >
                  <Typography>{item?.description}</Typography>
                </Popover>
              </React.Fragment>
            ))}
          </AvatarGroup>
        </div>
      </div>
    </>
  );
}

export default memo(GetInTouchForm);
