import React from "react";
import PropTypes from "prop-types";
import "./Media.css";

function Media(props) {
  return (
    <div className="Media">
      <div className="Media-cover">
        {/* {console.log(props.cover)} */}

        <img
          src={props.cover}
          alt=""
          width={260}
          height={160}
          className="Media-image"
        />
      </div>
      <h3 className="Media-title">{props.title}</h3>
      <p className="Media-author">{props.author}</p>
    </div>
  );
}

Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(["video", "audio"])
};

export default Media;
