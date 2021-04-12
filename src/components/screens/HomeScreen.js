import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryBar from '../categoryBar/CategoryBar';
import Video from '../../components/video/Video';
const HomeScreen = () => {
    return (
        <div>
            <Container>

                <CategoryBar />

                <Row>
    {/* İstediğimiz miktarda list vermek için bunu kullan */}
{
    [...new Array(20)].map(() => 
    <Col lg={3} md={4}>
        <Video />
    </Col>
)}


                </Row>
            </Container>
        </div>
    )
}

export default HomeScreen
