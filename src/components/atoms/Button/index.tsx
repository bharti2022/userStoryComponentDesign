import React from "react";


const Button = ({variant,children,onclick}) => {
  return <Button  variant={variant} onClick={onclick}>{children}</Button>;
};

export default Button;
