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
                    <button className="colore1"></button>
                    <button className="colore2"></button>
                    <button className="colore3"></button>
                    <button className="colore4"></button>
                    <button className="colore5"></button>
                    <button className="colore6"></button>
                    <button className="colore7"></button>
                    <button className="colore8"></button>
                    </div>
                </div>

                <div className="gradientframe">
                    <div className="colore">
                        Gradiente
                    </div>
                    <div className="gradienttable">
                    <button className="gradiente1"></button>
                    <button className="gradiente2"></button>
                    <button className="gradiente3"></button>
                    <button className="gradiente4"></button>
                    <button className="gradiente5"></button>
                    <button className="gradiente6"></button>
                    <button className="gradiente7"></button>
                    <button className="gradiente8"></button>
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
