import React from 'react';

interface UserProps{
    username: string
    isOnline: boolean
}

const User: React.FC<UserProps> = ({ username, isOnline }) => {
    return (
         <div>
      <h2>Hello, {username}</h2>
      {isOnline ? <p>You’re online!</p> : <p>You’re offline.</p>}
    </div>
    )
}