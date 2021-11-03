import React from "react";
import qr from '../immagini/qr.svg';
import camera from "../immagini/Camerasvg.svg";
import image from "../immagini/Image.svg";
import avanti from "../immagini/Avanti.svg";
import fasi from "../immagini/Group 5.svg";
import {Link} from 'react-router-dom';
import './Pages.css';

import { useState } from "react";


import {Switch,Route,Redirect, withRouter} from 'react-router-dom';

function Page2() {

    const [show, setShow] = useState(false);

    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

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
                        <div onClick={() => setShow((s) => true)}>
                            <img src={camera} className="icon" />
                        </div>
                        <div className="loadLabel">
                            Fotocamera
                        </div>
                    </div>
                    <div className="loaddx">
                        <div onClick={() => setShow((s) => true)}>
                            <img src={image} className="icon" />
                        </div>
                        <div className="loadLabel">
                            Galleria
                        </div>
                    </div>
                </div>
                <div className="pagineOptions">
                    <Link to="/page25">
                        <div className="buttonAvanti" style={{ display: show ? "block" : "none" }}>
                        <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to ="/page1">
                        <div className="buttonIndietro" onClick={() => setShow((s) => false)}>
                            <img src={avanti} className="indietro" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
  }
  
export default Page2;
