import { Input, TextField } from "@mui/material";
import React from "react";

const TextInputComponent = ({placeholder , value , onchange}) => {
  return (
    <Input
      value={value}
      onChange={onchange}
      style={{height:43 , background:"#fff" , borderRadius:8 , padding:10 , marginRight:10}}
      placeholder={placeholder}
      variant="outlined"
    />
  );
};

export default TextInputComponent;
