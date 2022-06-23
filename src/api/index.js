import {
  addAllAlbumAction,
  addNewAlbumAction,
  deleteAlbumAction,
  updateAlbumAction,
} from "../action";
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
