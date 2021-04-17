import React from 'react'
import "./videoMetaData.scss";
import moment from 'moment';
import numeral from "numeral";
import {
    MdThumbDown,
    MdThumbUp,
} from 'react-icons/md';
const VideoMetaData = () => {
    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5></h5>
                <div className="d-flex justify-content-between align-items py-1">
                    <span>

                    {numeral(1000).format("0.a")} Views •
                    {moment("2020-06-6").fromNow()}

                    </span>
                </div>
                <div>
                    <span>
                        <MdThumbUp size={26}/>{numeral(1000).format("0.a")}
                    </span>
                    <span>
                        <MdThumbDown size={26}/>{numeral(1000).format("0.a")}
                    </span>
                </div>
            </div>

            <div className="videoMetaData__top"></div>
        </div>
    )
}

export default VideoMetaData
