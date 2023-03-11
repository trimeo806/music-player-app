import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";
import Tracklist from "./component/Tracklist";
import Controller from "./component/Controller";
import { MusicPlayerProvider } from "./hooks/MusicPlayerContext";
import SongName from "./component/SongName";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <MusicPlayerProvider>
      <div
        className="App"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Grid
            container
            width="300px"
            height="500px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="auto"
            sx={{ bgcolor: "#D3BBDB", borderRadius: "70px" }}
          >
            {/* <Grid
              item
              display="flex"
              justifyContent="center"
              alignItems="center"
              alignSelf="flex-start"
              width="100%"
              sx={{
                bgcolor: "#FFFFFF80",
                borderRadius: "70px 70px 0px 0px",
                height: "70px",
                color: "rgb(94, 55, 109)",
              }}
            >
              <Box>
                <Typography>{}</Typography>
              </Box>{" "}
            </Grid> */}
            <SongName></SongName>
            <Grid
              container
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{ color: "rgb(94, 55, 109)" }}
            >
              <Tracklist></Tracklist>
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
              alignSelf="flex-end"
              sx={{
                bgcolor: "#FFFFFF80",
                borderRadius: " 0px 0px 70px 70px",
                height: "70px",
              }}
            >
              <Controller></Controller>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
