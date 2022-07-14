/* eslint-disable react/jsx-no-undef */
import React from "react";
import { InputAdornment, TextField } from "@material-ui/core";

const CustomTextField = ({
  placeholder,
  handleChange,
  iconPosition,
  Icon,
  variant,
}) => {
  return (
    <TextField
      placeholder={placeholder}
      variant={variant}
      onChange={() => {
        handleChange();
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position={iconPosition}>
            <Icon />
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};

export default CustomTextField;
