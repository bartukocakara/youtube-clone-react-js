import React from 'react';
import moment from 'moment';
import "./__comment.scss";

const Comment = () => {
    return (
        <div className="comment p-2 d-flex">
            <img 
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?r=pg " 
                alt=""
                className="rounded-circle mr-3"
            />
            <div className="comment__body">
                <p className="comment__header mb-1">
                    Bartu Kocakara • <span>{moment("2020-06-06").fromNow()}</span>
                </p>
                <p className="mb-0">Nice Video Dude</p> 
            </div>
        </div>
    )
}

export default Comment
