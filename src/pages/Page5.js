import React, {useEffect, useRef, useState} from "react";
import qr from '../immagini/Qr.png';
import avanti from "../immagini/Avanti.svg";
import fasi from "../immagini/Group 9.svg";
import {Link, useLocation} from 'react-router-dom';
import './Pages.css';

import { CirclePicker } from "react-color";
import {defaultQrOptions} from "../utilities";
import QRCodeStyling from "qr-code-styling";
import {useDispatch, useSelector} from "react-redux";


function Page5() {

    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

    window.scrollTo(0, 0);

    const qrPanel = useRef()

    const qrOptions = useSelector(state => state.qrOptions.value)
    const dispatch = useDispatch()

    const [qrFound, setFound] = useState(qrOptions.data !== defaultQrOptions.data)

    const [qrCode] = useState(new QRCodeStyling(qrOptions))

    useEffect(() => {
        qrCode.append(qrPanel.current)
    })

    useEffect(() => {
        qrCode.update(qrOptions)
    },[qrCode, qrOptions])

    return (
        <>
           <div className="fase">
            <img src={fasi}  />
            </div>

            <div className="qrframe">
                <div className="frame">
                    <svg ref={qrPanel} viewBox="0 0 1000 1000" style={{width: 200}}/>
                </div>
            </div>

            <div className="panel5">
                <div className="guideframe">
                    <div className="guide">
                        Un ultimo tocco
                    </div>
                </div>
                <div className="colorframe">
                    <div className="colore">
                        Cornice
                    </div>
                    <div className="colortable">
                    <div className="colore1"></div>
                    <div className="colore2"></div>
                    <div className="colore3"></div>
                    <div className="colore4"></div>
                    <div className="colore5"></div>
                    <div className="colore6"></div>
                    <div className="colore7"></div>
                    <div className="colore8"></div>
                    </div>
                </div>

                <div className="scrittaframe">
                    <div className="colore">
                        Scritta
                    </div>
                        <textarea className="text" cols="30" rows="2"></textarea>
                </div>

                <div className="fontframe">
                    <div className="colore">
                        Font
                    </div>
                    <div>
                        <select className="tendina">
                            <option></option>
                            <option value="SO">Sistemi Operativi</option>
                            <option value="TW">Tecnologie Web</option>
                            <option value="SM">Sistemi Multimediali</option>
                        </select>
                    </div>
                </div>

                <div className="coloreScrittaFrame">
                    <div className="colore">
                        Colore scritta
                    </div>
                    <div className="colortable">
                    <CirclePicker 
                        colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7",
                                 "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]}
                        circleSize={45}
                        circleSpacing={35}
                        width={{width: "100%"}}>
                    </CirclePicker>
                    </div>
                </div>

                <div className="pagine5Options">
                    <Link to={{pathname : "/page6", state : {}}}>
                        <div className="buttonAvanti">
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to={{pathname : "/page4", state : {}}}>
                        <div className="buttonIndietro">
                            <img src={avanti} className="indietro" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
  }
  
export default Page5;
