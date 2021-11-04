import React, { useRef } from "react";
import qr from '../immagini/Qr.png';
import camera from "../immagini/Camerasvg.svg";
import image from "../immagini/Image.svg";
import avanti from "../immagini/Avanti.svg";
import fasi from "../immagini/Group 5.svg";
import {Link} from 'react-router-dom';
import './Pages.css';

import { useState } from "react";


function Page2() {

    const bottomRef = useRef();

    const [show, setShow] = useState(false);

    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

    //window.scrollTo(0, 0);

    function bottomView() {
        bottomRef.current.scrollIntoView({ behaviour: 'smooth'})
    }

    return (
        <>
            <div className="fase">
            <img src={fasi}  />
            </div>
            <div className="qrframe">
                <div className="frame">
                    <img src={qr}  className="qr"/>
                </div>
            </div>
            <div className="panel2">
                <div className="guide">
                    Carica il tuo greenpass
                </div>
                <div className="loadOptions">
                    <div className="loadsx">
                        <div onClick={() => setShow((s) => !s)}>
                            <img src={camera} className="icon" onClick={bottomView}/>
                        </div>
                        <div className="loadLabel">
                            Fotocamera
                        </div>
                    </div>
                    <div className="loaddx">
                        <div onClick={() => setShow((s) => !s)}>
                            <img src={image} className="icon" onClick={bottomView}/>
                        </div>
                        <div className="loadLabel">
                            Galleria
                        </div>
                    </div>
                </div>
                <div className="pagineOptions" ref={bottomRef}>
                    <Link to="/page25">
                        <div className="buttonAvanti" style={{ display: show ? "block" : "none" }}>
                        <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to ="/page1">
                        <div className="buttonIndietro">
                            <img src={avanti} className="indietro" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
  }
  
export default Page2;
