import React, {useEffect, useRef, useState} from "react";
import avanti from "../immagini/Avanti.svg";
import {Link, useLocation} from 'react-router-dom';
import fasi from "../immagini/Group 6.svg";
import './Pages.css';

import {CirclePicker} from "react-color";
import QRCodeStyling from "qr-code-styling";
import {Button, Col, Container, Row} from "react-bootstrap";
import {defaultQrOptions} from "../utilities";
import {useDispatch, useSelector} from "react-redux";
import {changeCornersDotColor, changeCornerSquareColor, changeDotsColor} from "../features/qrCode/qrCodeOptions";

function Page25() {
    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

    window.scrollTo(0, 0);

    const qrPanel = useRef()

    const qrOptions = useSelector(state => state.qrOptions.value)
    const dispatch = useDispatch()

    const [qrCode] = useState(new QRCodeStyling(qrOptions))

    useEffect(() => {
        qrCode.append(qrPanel.current)
    })

    useEffect(() => {
        qrCode.update(qrOptions)
    },[qrCode, qrOptions])

    const color1Selected = (color, event) => {
        dispatch(changeDotsColor(color.hex))
    }

    const color2Selected = (color, event) => {
        dispatch(changeCornerSquareColor(color.hex))
    }
    const color3Selected = (color, event) => {
        dispatch(changeCornersDotColor(color.hex))
    }

    return (
        <div>
            <div className="fase">
                <img src={fasi}  />
            </div>

            <div className="qrframe">
                <div className="frame">
                    <svg ref={qrPanel} viewBox="0 0 1000 1000" style={{width: 200}}/>
                </div>
            </div>

            <div className="panel3">

                <div className="guideframe">
                    <div className="guide">
                        Scegli il colore
                    </div>
                </div>

                <div className="colorframe">
                    <div className="colore">
                        Colore
                    </div>

                    <div className="colortable">
                        <CirclePicker
                            colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7",
                                "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]}
                            circleSize={45}
                            circleSpacing={35}
                            width={{width: "100%"}}
                            onChangeComplete={color1Selected}
                        >
                        </CirclePicker>
                    </div>
                </div>

                <div className="gradientframe">
                    <div className="colore">
                        Gradiente
                    </div>
                    <div className="gradienttable">
                        <CirclePicker
                            colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7",
                                "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]}
                            circleSize={45}
                            circleSpacing={35}
                            width={{width: "100%"}}
                            onChangeComplete={color2Selected}
                        >
                        </CirclePicker>
                    </div>
                </div>

                <div className="dotframe">
                    <div className="colore">
                        Gradiente
                    </div>
                    <div className="gradienttable">
                        <CirclePicker
                            colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7",
                                "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]}
                            circleSize={45}
                            circleSpacing={35}
                            width={{width: "100%"}}
                            onChangeComplete={color3Selected}
                        >
                        </CirclePicker>
                    </div>
                </div>

                <footer>
                    <div className="pagine2Options">
                        <Link to={{pathname : "/page4", state : {}}}>
                            <div className="buttonAvanti">
                                <img src={avanti} className="avanti" />
                            </div>
                        </Link>

                        <Link to ={{pathname : "/page4", state : {}}}>
                            <div className="buttonIndietro">
                                <img src={avanti} className="indietro" />
                            </div>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Page25;
