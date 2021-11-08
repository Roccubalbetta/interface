import React from "react";
import qr from '../immagini/Qr.png';
import avanti from "../immagini/Avanti.svg";
import {Link} from 'react-router-dom';
import fasi from "../immagini/Group 7.svg";
import './Pages.css';


function Page3() {

    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

    window.scrollTo(0, 0);
    
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

                <div className="gradientframe">
                    <div className="colore">
                        Gradiente
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

                <footer>
                <div className="pagine3Options">
                    <Link to="/page4">
                        <div className="buttonAvanti">
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to ="/page25">
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
