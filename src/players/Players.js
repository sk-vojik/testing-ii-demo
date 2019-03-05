import React from 'react';

function Players(props) {
  if(!props.players) {
    return <h3>No PLayers available</h3>;
  }


  return (
    <>
    <h3>Player list</h3>
    {props.players.map(player => (
      <div key={player.id}>{player.name}</div>
    ))}
    </>
  )
}


export default Players