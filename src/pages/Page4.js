import React from "react";
import qr from '../immagini/Qr.png';
import avanti from "../immagini/Avanti.svg";
import image from "../immagini/Image.svg";
import fasi from "../immagini/Group 8.svg";
import {Link} from 'react-router-dom';
import './Pages.css';


function Page4() {

    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

    window.scrollTo(0, 0);
    
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

            <div className="panel4">
                <div className="guideframe">
                    <div className="guide">
                        Aggiungi un logo <small>(opzionale)</small>
                    </div>
                </div>

                <div className="loadOptions">
                    <div className="loadlogo">
                        <div>
                            <img src={image} className="logo" />
                        </div>
                        <div className="loadLabel">
                            Galleria
                        </div>
                    </div>
                    <div className="rimuovilogo">
                        Rimuovi
                    </div>
                </div>
                <footer>
                <div className="pagine4Options">
                    <Link to="/page5">
                        <div className="buttonAvanti4">
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to ="/page3">
                        <div className="buttonIndietro4">
                            <img src={avanti} className="indietro" />
                        </div>
                    </Link>
                </div>
                </footer>
            </div>
        </>
    )
  }
  
export default Page4;