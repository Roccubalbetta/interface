import React, {useEffect, useState} from "react";
import avanti from "../immagini/Avanti.svg";
import {Link, useLocation} from 'react-router-dom';
import fasi from "../immagini/Group 6.svg";
import './Pages.css';

import {CirclePicker} from "react-color";
import QRCodeStyling from "qr-code-styling";
import {Button, Col, Container, Row} from "react-bootstrap";
import {defaultQrOptions} from "../utilities";

function Page25() {
    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

    window.scrollTo(0, 0);

    let defaultOptions;

    const location = useLocation()

    if (location.state && location.state.qrOptions){
       defaultOptions = location.state.qrOptions
    } else {
        defaultOptions = defaultQrOptions
    }

    const [qrOptions, setQrOptions] = useState(defaultOptions)

    const [qrCode] = useState(new QRCodeStyling(qrOptions))

    useEffect(() => {
        qrCode.append(document.getElementById("qrPanel"))
    })

    useEffect(() => {
        qrCode.update(qrOptions)
    },[qrCode, qrOptions])

    const color1Selected = (color, event) => {
        setQrOptions({
            ...qrOptions,
            dotsOptions: {
                ...qrOptions.dotsOptions,
                color: color.hex
            }
        })
    }

    const color2Selected = (color, event) => {
        setQrOptions({
            ...qrOptions,
            cornersSquareOptions: {
                ...qrOptions.cornersSquareOptions,
                color: color.hex
            }
        })
    }
    const color3Selected = (color, event) => {
        setQrOptions({
            ...qrOptions,
            cornersDotOptions: {
                ...qrOptions.cornersDotOptions,
                color: color.hex
            }
        })
    }

    return (
        <Container fluid>
            <Row className={"my-3"}>
                <Col className={"text-center"}>
                    <img src={fasi}/>
                </Col>
            </Row>

            <Row className={"my-5"}>
                <Col className={"text-center"}>
                    <svg id={"qrPanel"} viewBox="0 0 1000 1000" style={{width: 200}}/>
                </Col>
            </Row>

            <Row style={{background : "#F1FAEE"}} className={"py-3 text-start"}>
                <Col>
                    <Row className={"mb-3"}>
                        <Col sm={5}/>
                        <Col sm={2}>
                            <h2>Scegli il colore :</h2>
                        </Col>
                        <Col sm={5}/>
                    </Row>
                    <Row className={"mb-3"}>
                        <Col sm={5}/>
                        <Col sm={2}>
                            <h3 className={"mb-2"}>
                                Quadrati negli angoli
                            </h3>
                            <CirclePicker
                                className = {"w-100"}
                                colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7",
                                    "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]}
                                circleSize={45}
                                circleSpacing={35}
                                onChangeComplete={color1Selected}
                            />
                        </Col>
                        <Col sm={5}/>
                    </Row>
                    <Row className={"mb-3"}>
                        <Col sm={5}/>
                        <Col sm={2}>
                            <h3 className={"mb-2"}>
                                Quadrati interni
                            </h3>
                            <CirclePicker
                                className = {"w-100"}
                                colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7",
                                    "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]}
                                circleSize={45}
                                circleSpacing={35}
                                onChangeComplete={color2Selected}
                            />
                        </Col>
                        <Col sm={5}/>
                    </Row>
                    <Row>
                        <Col sm={5}/>
                        <Col sm={2}>
                            <h3>
                                Quadrati grandi
                            </h3>
                            <CirclePicker
                                className = {"w-100"}
                                colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7",
                                    "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]}
                                circleSize={45}
                                circleSpacing={35}
                                onChangeComplete={color3Selected}
                            />
                        </Col>
                        <Col sm={5}/>
                    </Row>


                </Col>
            </Row>
            <Row>
                <Col sm={5}/>
                <Col sm={2}>
                    <Row>
                        <Col className={"text-center"}>
                            <Link to="/page2">
                                <Button className={"m-3"}>
                                    <img src={avanti}/>
                                </Button>
                            </Link>
                            <Link to={{pathname : "/page3", state : {qrOptions}}}>
                                <Button className={"m-3"}>
                                    <img src={avanti}/>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col sm={5}/>
            </Row>
        </Container>
    )
}

export default Page25;
