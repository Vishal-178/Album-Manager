import React, { Component } from "react";
import AlbumCard from "./AlbumCard";
// import { addAlbum } from "../action";
import { addAlbum } from "../api";
import Navbar from "./NavBar";
export default class App extends Component {
  componentDidMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
    this.props.store.dispatch(addAlbum());
  }

  render() {
    const { albums } = this.props.store.getState();
    return (
      <>
        {/* rendering NavBar */}
        <Navbar dispatch={this.props.store.dispatch} />
        {/* rendering AlbumCard for all album which come from the state  */}
        <div className="App">
          {albums.map((album) => (
            <AlbumCard
              album={album}
              key={album.id}
              dispatch={this.props.store.dispatch}
            />
          ))}
        </div>
      </>
    );
  }
}
