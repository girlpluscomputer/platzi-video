import React, { Component } from "react";
import "./Category.css";

class Category extends Component {
  render() {
    return (
      <div className="Category">
        <h1 className="title">{this.props.title}</h1>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}

export default Category;
