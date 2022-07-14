import React from "react";
import BookCard from "../../molecules/BookCard";

const BooksGrid = (data) => {
  return (
    <Grid container>
      {data.map((bookData) => {
        <>
          <Grid item>
            <BookCard bookData={bookData} />
          </Grid>
        </>;
      })}
    </Grid>
  );
};

export default BooksGrid;
