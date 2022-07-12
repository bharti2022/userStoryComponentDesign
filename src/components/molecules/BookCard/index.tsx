import { Card, CardMedia, CardContent, Typography, Button } from "@material-ui/core";
import React from "react";
import LabelWithIcon from "../LabelWithIcon/LabelWithIcon";
import Button from "../../atoms/Button";

const BookCard = (props) => {
  const handleClick=(id:number)=>{
     //updates cards status
  }
  return (<>
  <Card>
        <CardMedia component="img" image="book-cover.png" alt="book img" />
        <CardContent>
          <Typography>{props.title}</Typography>
          <Typography>{props.author}</Typography>
          <LabelWithIcon img={props.timeImg} text={props.minRead} />
          <Button variant={"contained"} onclick={handleClick(props.id)}>
            <Image imgSrc={"dots.png"} />
          </Button>
        </CardContent>
        </Card>
  </>)
};

export default BookCard;
