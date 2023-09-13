import React from 'react'
import './css/VideoPlayer.css'

function VideoPlayer() {
  const videoId = 'VIDEO_ID';
  return (
    <div className="video-container">
      <iframe
        src={`https://ia600504.us.archive.org/16/items/once-upon-a-snowman-2020/Once_Upon_a_Snowman_%282020%29.mp4`}
        allow="autoplay"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;