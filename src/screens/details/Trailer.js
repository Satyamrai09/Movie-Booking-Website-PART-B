import React from "react";
import YouTube from "react-youtube";

function Trailer(props) {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  console.log(props.id);
  return <YouTube videoId={props.id} opts={opts} onReady={_onReady} />;
}

function _onReady(event) {
  event.target.pauseVideo();
}

export default Trailer;
