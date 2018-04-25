import React from 'react';

const Song = (songs) => {
  if(!songs)return null;

  return (
    <div className="container">
      <div id="song-details-container">
        <h1 className="position">{songs.position}</h1>
        <img src={songs.image} alt={songs.title}/>
        <div className="songs-details">
          <h2>{songs.title}</h2>
          <audio controls>
            <source src={songs.audio} type="audio/mp4" />
          </audio>
          <h5 className="label">{songs.label}</h5>
        </div>
      </div>
    </div>
  )
}

export default Song;
