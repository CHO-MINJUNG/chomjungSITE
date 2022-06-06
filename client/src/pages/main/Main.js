import React from "react";
import {Container} from '@mui/material';
import MediaQuery from "react-responsive";

const Main = () => {
  return(
    <>
      <Container>
        <MediaQuery minWidth={801}>
          <p>큰거</p>
        </MediaQuery>
        <MediaQuery maxWidth={800}>
          <p>작은거</p>
        </MediaQuery>
      </Container>
    </>
  )
}

export default Main;