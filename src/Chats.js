import React from 'react'
import './Chats.css';
import Chat from './Chat';

function Chats() {
  return (
    <div className="chats">
      <Chat 
      name="Mark"
      message="Yo what's up"
      timestamp="40 seconds ago"
      profilePic="https://static.wikia.nocookie.net/sandman/images/1/1b/Mark_Hamill.jpg/revision/latest?cb=20220727170122"
      />
      <Chat 
      name="Ellen"
      message="Hellowww"
      timestamp="4 hours ago"
      profilePic="https://ca-times.brightspotcdn.com/dims4/default/d93012d/2147483647/strip/true/crop/2493x1919+0+0/resize/1200x924!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff5%2F99%2Fe47d8a1145de8e9b607e4ab4db53%2Fap21132545367098.jpg"
      />
      <Chat 
      name="Sandra"
      message="Yo"
      timestamp="3 days ago"
      profilePic="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/57807_v9_bb.jpg"
      />
      <Chat 
      name="Natasha"
      message="YSup"
      timestamp="44 seconds ago"
      profilePic="https://static.wikia.nocookie.net/daysofourlives/images/a/a2/Natasha_Hall_.jpg/revision/latest?cb=20240331183119"
      />
      </div>
  )
}

export default Chats;
