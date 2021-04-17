import React, { useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../../redux/actions/videos.action';
import CategoryBar from '../../categoryBar/CategoryBar';
import Video from '../../video/Video';
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonVideo from '../../skeletons/SkeletonVideo';

const HomeScreen = () => {

    const dispatch = useDispatch();

    useEffect( () => {

        dispatch(getPopularVideos())

    }, [dispatch])


    const { videos, activeCategory, loading } = useSelector(
        
        state => state.homeVideosReducer
    )

    const fetchData = () => {
        if(activeCategory === "All") { dispatch(getPopularVideos())}
        else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    return (
            <Container>
                
                <CategoryBar />

                    <InfiniteScroll
                        dataLength={videos.length}
                        next={fetchData}
                        hasMore={true}
                        loader={
                        <div className='spinner-border text-danger d-block'></div>
                        }
                        className='row'>
                        {!loading 
                            ? videos.map((video, id) => (
                                <Col lg={3} md={4}  key={id}>
                                    <Video video={video}/>
                                </Col>
                            ))
                        : 
                            [...Array(20)].map(() => 
                                <Col lg={3} md={4}> 
                                    <SkeletonVideo />
                                </Col>
                            )
                        
                        }
                    </InfiniteScroll>
            </Container>
    )
}

export default HomeScreen
