import React from 'react'
import Comment from '../comment/Comment';
import "./_comments.scss";

const Comments = () => {

    const handleComment = () => {
        
    }

    return (
        <div className="comments">
            <p>1234 Comments</p>
            <div className="comments__form d-flex w-100 my-2">
                <img 
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?r=pg" 
                    alt=""
                    className="rounded-circle mr-3"
                    />
                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input type="text" className="flex-grow-1" placeholder="Write a comment" />
                    <button className="border-0 p-2">Comment</button>
                </form>
            </div>

            
            <div className="comments__list">
            {
                [...Array(20)].map( (value, id)=> (
                    <Comment key={id} />
                ))
            }
            </div>
        </div>
    )
}

export default Comments
