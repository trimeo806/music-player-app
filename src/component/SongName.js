import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import useMusicPlayer from "../hooks/usePlayerProvider";

function SongName() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <Grid
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
        <Typography>{currentTrackName}</Typography>
      </Box>
    </Grid>
  );
}

export default SongName;
