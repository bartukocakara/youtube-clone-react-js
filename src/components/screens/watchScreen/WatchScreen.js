import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getVideoById } from '../../../redux/actions/videos.action';
import Comments from '../../comments/Comments';
import VideoHorizontal from '../../videoHorizontal/VideoHorizontal';
import VideoMetaData from '../../videoMetaData/VideoMetaData';
import "./watchScreen.scss";

const WatchScreen = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideoById(id))

    }, [dispatch, id]);
    const { video, loading } = useSelector(state => state.selectedVideoReducer)

    return (
        <Row>
            <Col lg={8}>

                <div className="watchScreen__player">
                    <iframe 
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder="0"
                        allowFullScreen
                        width="100%"
                        height="100%"
                        title={video?.snippet?.title}
                        >
                    </iframe>
                </div>
    {
        !loading ? ( 
            <VideoMetaData video={video} videoId={id}/> 
            )  : ( <h6>Loading </h6>
            )
    }
                <Comments 
                    videoId={id}
                    totalComments={video?.statistics?.commentCount}
                />

            </Col>
            <Col lg={4}>

                {
                    [...Array(10)].map( (value, id) =><VideoHorizontal key={id} /> )
                }
                    
            </Col>
        </Row>
    )
}

export default WatchScreen
