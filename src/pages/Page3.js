import React from "react";
import qr from '../immagini/qrpng.png';
import avanti from "../immagini/avanti.png";
import {Link} from 'react-router-dom';
import fasi from "../immagini/Group 6.png";
import './Pages.css';


import {Switch,Route,Redirect, withRouter} from 'react-router-dom';

function Page3() {
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
                        Scegli il colore
                    </div>
                </div>
                <div className="loadOptions">
                    <div className="colore">
                        Colore
                    </div>
                    <div className="colore1"></div>
                    <div className="colore2"></div>
                    <div className="colore3"></div>
                    <div className="colore4"></div>
                    <div className="colore5"></div>
                    <div className="colore6"></div>
                    <div className="colore7"></div>
                    <div className="colore8"></div>
                    <div className="colore9"></div>
                    <div className="colore10"></div>
                    <div className="gradiente">
                        Gradiente
                    </div>
                    <div className="gradienteframe">
                    <div className="gradiente1"></div>
                    <div className="gradiente2"></div>
                    <div className="gradiente3"></div>
                    <div className="gradiente4"></div>
                    <div className="gradiente5"></div>
                    <div className="gradiente6"></div>
                    <div className="gradiente7"></div>
                    <div className="gradiente8"></div>
                    <div className="gradiente9"></div>
                    <div className="gradiente10"></div>
                    </div>
                </div>
                <footer>
                <div className="pagine2Options">
                    <Link to="/page4">
                        <div className="buttonAvanti">
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to ="/page2">
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
