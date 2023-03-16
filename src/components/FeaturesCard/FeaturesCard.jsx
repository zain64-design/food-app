import React from 'react'
import { Card, Col } from 'react-bootstrap'

const FeaturesCard = (props) => {
    return (
        <React.Fragment>
            <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
                <Card className="feature-card">
                    <div className="img">
                        <img src={props.data.image} className="img-fluid thumb" alt="" />
                    </div>

                    <div className="desc">
                        <a href="/" className="anchor">{props.data.Head}</a>
                        <p>{props.data.para}</p>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default FeaturesCard