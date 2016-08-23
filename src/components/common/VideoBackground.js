import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const VideoBackground = () => {
  return (
    <video autoPlay loop id="video-background" muted>
      <source type="video/youtube" src="https://www.youtube.com/watch?v=3DQeZ0kstp8" />
    </video>
  );
};

export default VideoBackground;
