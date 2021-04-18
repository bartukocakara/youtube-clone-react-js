import React from 'react'
import "./__videoHorizontal.scss";
import moment from 'moment';
import numeral from "numeral";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { AiFillEye } from "react-icons/ai";
import { Col, Row } from 'react-bootstrap';

const VideoHorizontal = () => {

    const seconds = moment.duration("100").asSeconds();
    const _duration = moment.utc(seconds* 1000).format("mm:ss") 

    return (
        <Row className="videoHorizontal m-1 py-2 align-items-center">
            <Col className="videoHorizontal__left" xs={6} md={4}>
                <LazyLoadImage 
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?r=pg"
                    effect="blur"
                    className="videoHorizontal__thumbnail"
                    wrapperClassName="videoHorizontal__thumbnail-wrapper"
                />
                <span className="videoHorizontal__duration">{_duration}</span>
            </Col>
            <Col className="videoHorizontal__right" xs={6} md={8}>
                <p className="videoHorizontal__title mb-1">
                    Be a great networker
                </p>
                <div className="videoHorizontal__details">
                    <span>
                        <AiFillEye />{numeral(10000).format("0.a")}  Views •
                    </span>
                    {moment("2000-06-20").fromNow()} 
                </div>
                <div className="videoHorizontal__channel d-flex align-items-center my-1">
                    {/* <LazyLoadImage 
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?r=pg"
                        effect="blur"
                        className="videoHorizontal__thumbnail"
                        wrapperClassName="videoHorizontal__thumbnail-wrapper"
                    /> */}
                    <p>Bartu Koder</p>
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizontal
