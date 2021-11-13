import React, {useEffect, useState} from "react";
import qr from '../immagini/Qr.png';
import avanti from "../immagini/Avanti.svg";
import {Link, useLocation} from 'react-router-dom';
import fasi from "../immagini/Group 7.svg";
import './Pages.css';

import { CirclePicker } from "react-color";
import {defaultQrOptions} from "../utilities";
import QRCodeStyling from "qr-code-styling";


function Page3() {

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
        //TODO
    }

    const color2Selected = (color, event) => {
        //TODO
    }

    return (
        <div>
             <div className="fase">
            <img src={fasi}  />
            </div>

            <div className="qrframe">
                <div className="frame">
                    <svg id={"qrPanel"} viewBox="0 0 1000 1000" style={{width: 200}}/>
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

                <footer>
                <div className="pagine3Options">
                    <Link to="/page4">
                        <div className="buttonAvanti">
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to ={{pathname : "/page25", state : {qrOptions}}}>
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
  
export default Page3;
