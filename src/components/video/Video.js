import React from 'react'
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

const Video = ({ video }) => {

    const { 
        id, 
        snippet: { 
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails:{medium},
         },
        } = video;

    return (
        <div className="video">
            <div className="video__top">
                <img src={medium.url} alt="" />
                <span>channelTitle</span>
            </div>
            <div className="video__title">
                {title}
            </div>
            <div className="video__details">
                <span>
                <AiFillEye />5m  Views •
                </span>
                <span>5 days ago</span>
            </div>
            <div className="video__channel">
                <img src="https://yt3.ggpht.com/ytc/AAUvwnj_94-h99tHJW24F0PvQeVjH-sJhHo-6Sy13l069Q=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <p>Bartu Kocakara</p>
            </div>
        </div>
    )
}

export default Video
