import React from 'react'


function Comment({ user, comment }) {
    console.log(comment, user)
    return (
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default Comment;