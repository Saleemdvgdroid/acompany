import React from 'react';
import { Container, Button, Card } from 'react-bootstrap'


const SplashLogo = (props) => {
    return (
        <Container>
            <div
                style={{ top: 10, bottom: 10, left: 10, right: 10, position: 'fixed', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Card onMouseOver={() => { props.onFocussed() }}
                    onMouseOut={() => { props.onUnfocussed() }}
                    bg="transparent" style={{ padding: 20 }}>
                    <Card.Title className="text-center">Welcome</Card.Title>
                    <Card.Img variant="top" src={require("../Images/logo.png")} />
                    <Card.Body className="text-center">
                        <Button variant="primary"

                            size="md" onClick={props.onButtonClick}>View more</Button>
                    </Card.Body>
                </Card>

            </div>
        </Container>
    )
}

export default SplashLogo