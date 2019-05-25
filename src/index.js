import React from "react";
import ReactDOM from "react-dom";
import data from "./api.js";
import Playlist from "./playlist/components/Playlist.js";
import * as serviceWorker from "./serviceWorker";
// import Category from "./playlist/components/Category.js";

// ReactDOM.render(WHAT, WHERE);
ReactDOM.render(<Playlist data={data} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
