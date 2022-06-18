import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";

export default function Fundraiser({ fundraiser }) {
  return (
    <>
      <Container maxWidth="lg">
        <main>
          <Header key={uuidv4()} fundraiser={fundraiser} />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main fundraiser={fundraiser} />
            <Sidebar fundraiser={fundraiser} />
          </Grid>
        </main>
      </Container>
    </>
  );
}