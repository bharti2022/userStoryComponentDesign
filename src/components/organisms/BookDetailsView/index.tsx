import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import LabelWithIcon from "../../molecules/LabelWithIcon";
import Tabs from "../../molecules/Tabs";
import Modal from "../../molecules/Modal";

const BookDetailThumbnail = styled(Box)({});

const BookDetails = (props) => {
  const data = getBookById(id:number);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleAddToLibrary = () => {};
  const handleSendToKindle = () => {
    setDialogOpen(true);
  };
  const handleBuy = () => {};

  return (
    <>
      <Grid>
        <Grid item>
          <Typography>{data.bookname}</Typography>
          <Typography>{data.bookdetail}</Typography>
          <Typography>{data.Authors}</Typography>
          <LabelWithIcon img={"timeImg.png"} text={"min-read"} />
          <LabelWithIcon img={"audio.png"} text={"audio available"} />
          <Grid>
            <Button variant={"text"} onclick={handleAddToLibrary}>
              Read now
            </Button>
            <Button variant={"text"} onclick={handleBuy}>
              Buy Book
            </Button>
            <Button variant={"text"} onclick={handleSendToKindle}>
              Send to kindle
            </Button>
          </Grid>
          <Modal
            variant={"primary"}
            open={dialogOpen}
            component={component}
          />
          <Tabs data={["synopsis", "who is it for", "About the author"]} />
        </Grid>
        <Grid item>
          <BookDetailThumbnail>
            <Image imgSrc={data.imgSrc} />
          </BookDetailThumbnail>
        </Grid>
      </Grid>
    </>
  );
};

export default BookDetails;
Footer