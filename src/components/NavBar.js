import React from "react";
import { addNewAlbum } from "../api";
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  handleAdd = () => {
    const { searchText } = this.state;
    const temp = {
      title: searchText,
    };
    this.props.dispatch(addNewAlbum(temp));
  };
  render() {
    return (
      <div className="nav">
        <div className="nav-container">
          <span className="nav-title">Add New Album</span>
          <input className="nav-input" onChange={this.handleChange} />
          <button className="SubmitUpdate" onClick={this.handleAdd}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
