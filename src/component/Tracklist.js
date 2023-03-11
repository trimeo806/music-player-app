import useMusicPlayer from "../hooks/usePlayerProvider";
import { IconButton, Grid } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PauseIcon from "@mui/icons-material/Pause";

const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <>
      {trackList.map((track, index) => (
        // ( Surprise us with your code here)

        <Grid
          key={track.name}
          item
          sx={{
            width: "60%",
            bgcolor: "hsla(0,0%,100%,.5)",
            borderRadius: "10px",
            color: "rgb(94, 55, 109)",
            fontSize: "0.5em",
            margin: "10px 0px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            disabled={false}
            sx={{
              width: "100%",
              color: "rgb(94, 55, 109)",
              fontSize: "0.5em",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => {
              playTrack(index);
            }}
          >
            <Grid container display="flex" alignItems="center">
              <Grid
                item
                display="flex"
                justifySelf="flex-start"
                marginRight="10px"
              >
                {" "}
                {isPlaying && currentTrackName === track.name ? (
                  <HeadphonesIcon></HeadphonesIcon>
                ) : (
                  <PauseIcon></PauseIcon>
                )}
              </Grid>
              <Grid item display="flex" justifySelf="flex-end">
                {" "}
                {track.name}
              </Grid>
            </Grid>
          </IconButton>
        </Grid>
      ))}
    </>
  );
};

export default TrackList;
