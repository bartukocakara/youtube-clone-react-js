import React from 'react';
import moment from 'moment';
import "./__comment.scss";

const Comment = ( { comment } ) => {
    const {
        authorDisplayName,
        authorProfileImageUrl,
        publishedAt,
        textDisplay,
     } = comment
    return (
        <div className="comment p-2 d-flex">
            <img 
                src={authorProfileImageUrl} 
                alt=""
                className="rounded-circle mr-3"
            />
            <div className="comment__body">
                <p className="comment__header mb-1">
                    {authorDisplayName} • <span>{moment(publishedAt).fromNow()}</span>
                </p>
                <p className="mb-0">{textDisplay}</p> 
            </div>
        </div>
    )
}

export default Comment
