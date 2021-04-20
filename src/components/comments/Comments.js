import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comments.action';
import Comment from '../comment/Comment';
import "./_comments.scss";

const Comments = ({videoId, totalComments}) => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getCommentsOfVideoById(videoId))

    }, [videoId, dispatch]);

    const comments = useSelector(state => state.commentListReducer.comments)

    const _comments = comments?.map(
        comment => comment.snippet.topLevelComment.snippet
    )

    const [text, setText] = useState('')

    const handleComment = (e) => {
        e.preventDefault();
        if(text.length === 0) return 
        dispatch(addComment(videoId))
        setText('')
    }

    return (
        <div className="comments">
            <p>{totalComments} Comments</p>
            <div className="comments__form d-flex w-100 my-2">
                <img 
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?r=pg" 
                    alt=""
                    className="rounded-circle mr-3"
                    />
                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input 
                        type="text" 
                        className="flex-grow-1" 
                        placeholder="Write a comment"
                        value={text}
                        onChange={e=>setText(e.target.value)}    
                    />
                    <button className="border-0 p-2">Comment</button>
                </form>
            </div>

            
            <div className="comments__list">
            {
                _comments?.map( (comment, id)=> (
                    <Comment comment={comment} key={id} />
                ))
            }
            </div>
        </div>
    )
}

export default Comments
