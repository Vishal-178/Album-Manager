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
        <Navbar dispatch={this.props.store.dispatch} />
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
