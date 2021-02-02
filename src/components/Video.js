import React, { useState } from "react"
import Comments from "./CommentsList"

function Video({ title, embedUrl, views, createdAt, upvotes, downvotes, comments }) {
    const [upVotes, setUpVotes] = useState(upvotes)
    const [downVotes, setDownVotes] = useState(downvotes)
    

    function handleVote(e) {
        if(e.target.value === "upvote") {
            setUpVotes((currentUpVotes) => currentUpVotes + 1)
        } else if (e.target.value === "downvote") {
            setDownVotes((currentDownVotes) => currentDownVotes + 1)
        }
    }

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameborder="0"
                allowfullscreen
                title={title}
            />
            <h1>{title}</h1>
            <small>{views} Views</small> | <small>Uploaded {createdAt}</small>
            <br></br>
            <br></br>
            <button value="upvote" onClick={handleVote}>{upVotes}👍</button><button value="downvote" onClick={handleVote}>{downVotes}👎</button>
        </div>
    )

}

export default Video;