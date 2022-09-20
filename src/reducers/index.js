import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Rude!", duration: "04:30" },
    { title: "The Lazy Song!", duration: "04:01" },
    { title: "Back in Black!", duration: "03:30" },
    { title: "Fear of the Dark!", duration: "06:40" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songList: songReducer,
  selectedSong: selectedSongReducer,
});
