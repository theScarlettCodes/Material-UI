import React from "react";
import { ButtonGroup, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";

const Create = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log("Clicked")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
