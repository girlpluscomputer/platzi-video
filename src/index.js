import React from "react";
import ReactDOM from "react-dom";
import data from "./api.json";
import Playlist from "./playlist/components/Playlist";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(WHAT, WHERE);
ReactDOM.render(<Playlist data={data} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
