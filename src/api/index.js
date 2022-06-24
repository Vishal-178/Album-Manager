import {
  addAllAlbumAction,
  addNewAlbumAction,
  deleteAlbumAction,
  updateAlbumAction,
} from "../action";
// use to addNew album which fetch data from the api and call action which save all
// album in store and render
export function addAlbum() {
  const url = "https://jsonplaceholder.typicode.com/albums";
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((albums) => {
        dispatch(addAllAlbumAction(albums));
      });
  };
}
// use to send delete api then after receiving response it call delete album action which remove that album from the state
export function deleteAlbum(album) {
  const url = `https://jsonplaceholder.typicode.com/albums/${album.id}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return album;
      })
      .then((album) => {
        dispatch(deleteAlbumAction(album));
      });
  };
}
// send put request to api after getting response it update title of album and call update action and update title of that album
export function updateAlbum(album) {
  const url = `https://jsonplaceholder.typicode.com/albums/${album.id}`;
  return function (dispatch) {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        id: album.id,
        title: album.title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return album;
      })
      .then((json) => {
        dispatch(updateAlbumAction(json));
      });
  };
}
// post request to update new album
export function addNewAlbum(album) {
  const url = "https://jsonplaceholder.typicode.com/albums";
  return function (dispatch) {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: album.title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(addNewAlbumAction(json));
      });
  };
}
