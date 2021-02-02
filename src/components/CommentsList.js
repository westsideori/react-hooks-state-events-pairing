import React, {useState} from 'react'
import Comment from "./Comment"

function CommentsList({comments}) {
    const [isHidden, setIsHidden] = useState(true)

    const commentsArray = comments.map((comment) => {
        return <Comment key={comment.id} user={comment.user} comment={comment.comment} />
    })

    const handleCommentToggle = () => {
        setIsHidden((isHidden) => !isHidden)
    }

    const renderComments = () => {
        if (isHidden) {
            return null
        } else {
            return (
                <div>
                    <h2>{comments.length} Comments</h2> 
                    {commentsArray}
                </div>
            )
        }
    }

    return (
        <div>
            <br/>
            <br/>
            <button onClick={handleCommentToggle}>{isHidden ? "Show Comments" : "Hide Comments"}</button>
            <br/>
            <br/>
            <span> ------------------------------------------------------------------------------------------------------- </span>
            {renderComments()}
            
            
        </div>
    )
}

export default CommentsList;