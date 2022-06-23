import {
  ADD_ALL_ALBUM,
  ADD_NEW_ALBUM,
  DELETE_ALBUM,
  UPDATE_ALBUM,
} from "../action";
const initialState = {
  albums: [],
  newId: 101,
};
const newId = 101;
export default function albums(state = initialState, action) {
  switch (action.type) {
    case ADD_ALL_ALBUM:
      return {
        ...state,
        albums: action.albums,
      };
    case DELETE_ALBUM:
      const filterArray = state.albums.filter(
        (album) => album.id !== action.album.id
      );
      return {
        ...state,
        albums: filterArray,
      };
    case UPDATE_ALBUM:
      const element = state.albums.findIndex(
        (obj) => obj.id == action.album.id
      );
      const newArray = state.albums.splice(0, element);
      newArray.push(action.album);
      state.albums.shift();
      return {
        ...state,
        albums: [...newArray, ...state.albums],
      };
    case ADD_NEW_ALBUM:
      action.album.id = state.newId;
      const id = state.newId + 1;
      return {
        newId: id,
        albums: [action.album, ...state.albums],
      };
    default:
      return { ...state };
  }
}
