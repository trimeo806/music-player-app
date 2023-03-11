import React from "react";
import { Box } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import { IconButton } from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import useMusicPlayer from "../hooks/usePlayerProvider";
import { useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Controller() {
  const {
    togglePlay,
    isPlaying,
    currentTrackIndex,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  useEffect(() => {
    console.log(currentTrackIndex);
  });

  return (
    <Box>
      <IconButton
        sx={{ "&:hover": { bgcolor: "rgba(0, 0, 0, 0.1)" } }}
        onClick={playPreviousTrack}
      >
        <SkipPreviousIcon
          sx={{ color: "rgba(0, 0, 0, 0.26)" }}
        ></SkipPreviousIcon>
      </IconButton>

      {currentTrackIndex === null ? (
        <IconButton
          sx={{
            borderRadius: "50%",
            bgcolor: "rgba(0, 0, 0, 0.26)",
            "&:hover": { bgcolor: "rgba(0, 0, 0, 0.26)" },
            disabled: "",
          }}
        >
          <PlayArrowIcon sx={{ disabled: "" }}></PlayArrowIcon>
        </IconButton>
      ) : isPlaying ? (
        <IconButton
          sx={{
            borderRadius: "50%",
            bgcolor: "rgba(0, 0, 0, 0.26)",
            "&:hover": { bgcolor: "rgba(0, 0, 0, 0.5)" },
            disabled: "rgba(0, 0, 0, 0.26)",
          }}
          onClick={togglePlay}
        >
          <PauseIcon></PauseIcon>
        </IconButton>
      ) : (
        <IconButton
          sx={{
            borderRadius: "50%",
            bgcolor: "rgba(0, 0, 0, 0.26)",
            "&:hover": { bgcolor: "rgba(0, 0, 0, 0.5)" },
            disabled: "rgba(0, 0, 0, 0.26)",
          }}
          onClick={togglePlay}
        >
          <PlayArrowIcon></PlayArrowIcon>
        </IconButton>
      )}

      <IconButton
        sx={{ "&:hover": { bgcolor: "rgba(0, 0, 0, 0.1)" } }}
        onClick={playNextTrack}
      >
        <SkipNextIcon sx={{ color: "rgba(0, 0, 0, 0.26)" }}></SkipNextIcon>
      </IconButton>
    </Box>
  );
}

export default Controller;
