import React from 'react';

function HeroVideo() {
  return (
    <div className="bg-slate-600 w-full h-[90vh]">
      <div>
        <img src="" alt="" />
        <video src="/home-video.mp4" autoPlay muted loop />
      </div>
    </div>
  );
}

export default HeroVideo;