import React, { useEffect } from 'react'
import "./videoMetaData.scss";
import moment from 'moment';
import numeral from "numeral";
import {
    MdThumbDown,
    MdThumbUp,
} from 'react-icons/md';
import ShowMoreText from 'react-show-more-text';
import { useDispatch, useSelector } from 'react-redux';
import { checkSubscriptionStatus, getChannelDetails } from '../../redux/actions/channel.action';

const VideoMetaData = ( { video : { snippet,statistics }, videoId } ) => {

    const { channelId, channelTitle, description, title, publishedAt } = snippet
    const {viewCount, likeCount, dislikeCount} = statistics

    const dispatch = useDispatch();
    const { snippet: channelSnippet, statistics:channelStatistics} = useSelector( state => state.channelDetailsReducer)

    const subscriptionStatus = useSelector(state => state.channelDetailsReducer.checkSubscriptionStatus)

    useEffect(() => {

        dispatch(getChannelDetails(channelId))
        dispatch(checkSubscriptionStatus(channelId))

    }, [dispatch, channelId])

    return (
        <div className="videoMetadata__top py-2">
            <div className="videoMetadata__top">
                <h5>{title}</h5>
                <div className="d-flex justify-content-between align-items py-1">
                    <span>
                        {numeral(viewCount).format("0.a")} Views •
                        {moment(publishedAt).fromNow()}
                    </span>
                
                <div>
                    <span className="mr-3">
                        <MdThumbUp size={26}/>{numeral(likeCount).format("0.a")}
                    </span>
                    <span className="mr-3">
                        <MdThumbDown size={26}/>{numeral(dislikeCount).format("0.a")}
                    </span>
                </div>
            </div>
        </div>
        <div className="videoMetadata__channel d-flex justify-content-between align-items py-3 my-2">
                <div className="d-flex">
                    <div className="d-flex justify-content-between align-items py-1">
                    <div>
                        <img 
                            src={channelSnippet?.thumbnails?.default?.url}
                            alt=""
                            className="rounded-circle mr-3"
                            />                    
                        </div>
                        <div className="d-flex flex-column">
                            <span>{channelTitle}</span>
                            <span>{numeral(channelStatistics?.subscriberCount).format("0.a")}</span>
                        </div>
                    </div>
                </div>
                <button className={`p-2 m-2 border-0 btn ${
                    subscriptionStatus && 'btn-gray'}`}>
                    {subscriptionStatus ? 'Subscribed' : "Subscribe"}
                </button>
        </div>    

        <div className="d-flex justify-content-between align-items-center my-2 py-3">
                    
                    <div className="d-flex flex-column">
                        <span></span>
                    </div>
                </div>

        <div className="videoMetadata__description">
            <ShowMoreText lines={3} more="Show more" less="Show Less" expanded={false}>
                {description}
            </ShowMoreText>
        </div>
           

        </div>
    )
}

export default VideoMetaData
