import React from "react";
import qr from '../immagini/qrpng.png';
import camera from "../immagini/Camera.png";
import image from "../immagini/Image.png";
import avanti from "../immagini/avanti.png";
import fasi from "../immagini/Group 5.png";
import {Link} from 'react-router-dom';
import './Pages.css';


import {Switch,Route,Redirect, withRouter} from 'react-router-dom';

function Page2() {
    return (
        <div>
            <div className="fase">
            <img src={fasi}  />
            </div>
            <div className="qrframe">
                <div className="frame">
                    <img src={qr}  className="qr"/>
                </div>
            </div>
            <div className="panel">
                <div className="guideframe">
                    <div className="guide">
                        Carica il tuo greenpass
                    </div>
                </div>
                <div className="loadOptions">
                    <div className="loadsx">
                        <div>
                            <img src={camera} className="icon" />
                        </div>
                        <div className="loadLabel">
                            Fotocamera
                        </div>
                    </div>
                    <div className="loaddx">
                        <div>
                            <img src={image} className="icon" />
                        </div>
                        <div className="loadLabel">
                            Galleria
                        </div>
                    </div>
                </div>
                <footer>
                <div className="pagineOptions">
                    <Link to="/page3">
                        <div className="buttonAvanti">
                        <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to ="/page1">
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
  
export default Page2;
