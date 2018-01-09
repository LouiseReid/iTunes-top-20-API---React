import React from 'react'

class SongList extends React.Component {
  render(){

    if(!this.props.songs) return null
    const songslist = this.props.songs.map((song, index) => {
      return(
        <div key={index} className="container">
          <div id="song-details-container">
            <h1 className="position">{index +1}</h1>
              <img src={song["im:image"][2].label} alt={song["im:artist"].label}/>
            <div className="song-details">
              <h2>{song.title.label}</h2>
              <h3>{song["im:artist"].label}</h3>
              <audio controls>
                <source src={song.link[1].attributes.href} type="audio/mp4" />
              </audio>
              <h5>{song.rights.label}</h5>
            </div>
          </div>
        </div>

      )
    })

    return(
      <div>
        {songslist}
      </div>
    )
  }
}




export default SongList
