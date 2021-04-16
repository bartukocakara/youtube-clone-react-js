import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../../redux/actions/videos.action';
import CategoryBar from '../../categoryBar/CategoryBar';
import Video from '../../video/Video';

import InfiniteScroll from 'react-infinite-scroll-component';

const HomeScreen = () => {

    const dispatch = useDispatch();

    useEffect( () => {

        dispatch(getPopularVideos())

    }, [dispatch])


    const { videos, activeCategory } = useSelector(
        
        state => state.homeVideosReducer
    )

    const fetchData = () => {
        if(activeCategory === "All") {
            dispatch(getPopularVideos())
        }
        else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    return (
            <Container>

                <CategoryBar />

                <Row>
                    <InfiniteScroll
                        dataLength={videos.length}
                        next={fetchData}
                        hasMore={true}
                        loader={
                        <div className='spinner-border text-danger d-block mx-auto'></div>
                        }
                        className='row'>
                        {
                            videos.map((video, id) => (
                                <Col lg={3} md={4} key={id} >
                                <Video video={video} />
                                </Col>
                            )
                        )}
                    </InfiniteScroll>
                </Row>
            </Container>
    )
}

export default HomeScreen
