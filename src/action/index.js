export const ADD_ALL_ALBUM = "ADD_ALL_ALBUM";
export const DELETE_ALBUM = "DELETE_ALBUM";
export const UPDATE_ALBUM = "UPDATE_ALBUM";
export const ADD_NEW_ALBUM = "ADD_NEW_ALBUM";
// add all album to state
export function addAllAlbumAction(albums) {
  return {
    type: ADD_ALL_ALBUM,
    albums,
  };
}
// delete single album from state
export function deleteAlbumAction(album) {
  return {
    type: DELETE_ALBUM,
    album,
  };
}
// update title of the album
export function updateAlbumAction(album) {
  return {
    type: UPDATE_ALBUM,
    album,
  };
}
// add new album
export function addNewAlbumAction(album) {
  return {
    type: ADD_NEW_ALBUM,
    album,
  };
}
