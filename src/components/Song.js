import React from 'react'

const Song = ({song}) => {
  if(!song){
    return null
  }
  return(
    <h3>{song.name}</h3>
  )
}



export default Song
