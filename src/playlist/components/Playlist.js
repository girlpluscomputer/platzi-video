import React, { Component } from "react";
import Media from "./Media.js";
import "./Playlist.css";
import Category from "./Category.js";

class Playlist extends Component {
  render() {
    const category = this.props.data.categories;
    return (
      <div>
        {category.map(item => {
          return (
            <div>
              <Category {...item} key={item.id} />
              <div className="parent-container">
                {item.playlist.map(item => {
                  return <Media {...item} key={item.id} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Playlist;
