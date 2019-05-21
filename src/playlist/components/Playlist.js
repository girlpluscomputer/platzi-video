import React, { Component } from "react";
import Media from "./Media.js";
import "./Playlist.css";

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist;

    return (
      <div>
        {playlist.map(item => {
          return <Media {...item} key={item.id} />;
        })}
      </div>
    );
  }
}

export default Playlist;
