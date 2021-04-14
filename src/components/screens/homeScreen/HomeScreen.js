import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryBar from '../../categoryBar/CategoryBar';
import Video from '../../video/Video';

const HomeScreen = () => {
    return (
            <Container>

                <CategoryBar />

                <Row>
                {/* İstediğimiz miktarda list vermek için bunu kullan */}
                {
                    [...new Array(20)].map((value, i) => 
                    <Col lg={3} md={4} key={i}>
                        <Video />
                    </Col>
                )}


                </Row>
            </Container>
    )
}

export default HomeScreen
