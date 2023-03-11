import React, { useState } from "react";
import track1 from "./Track/track1.mp3";
import track2 from "./Track/track2.mp3";
import track3 from "./Track/track3.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Cold Gin - Jazz",
      file: track1,
    },
    {
      name: "heaven's On Fire - Jazz",
      file: track2,
    },
    {
      name: "Beth - Jazz",
      file: track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
