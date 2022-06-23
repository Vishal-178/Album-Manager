import React, { Component } from "react";
import { deleteAlbum, updateAlbum } from "../api";
class AlbumCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      isUpdate: false,
    };
  }
  handleDelete = () => {
    const { album } = this.props;
    this.props.dispatch(deleteAlbum(album));
  };
  handleUpdate = () => {
    const { searchText } = this.state;
    const temp = {
      id: this.props.album.id,
      title: searchText,
    };
    this.props.dispatch(updateAlbum(temp));
    this.setState({ isUpdate: false });
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  viewForm = () => {
    this.setState({ isUpdate: true });
  };
  render() {
    return (
      <div className="AlbumCard">
        <span className="CardId">Id - {this.props.album.id}</span>
        <span className="CardTitle">Title</span>
        <span className="CardText">{this.props.album.title}</span>
        <div className="">
          <button className="Update-Button Button" onClick={this.viewForm}>
            Update
          </button>
          <button className="Delete-Button Button" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
        {this.state.isUpdate ? (
          <div className="input-in-card">
            <input
              className="CardInput"
              onChange={this.handleChange}
              placeholder="Enter Title"
            ></input>
            <button className="SubmitUpdate" onClick={this.handleUpdate}>
              ▶
            </button>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
export default AlbumCard;
