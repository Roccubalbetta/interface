import React from "react";
import qr from '../immagini/Qr.png';
import share from '../immagini/Share.svg';
import image from "../immagini/Image.svg";
import avanti from "../immagini/Avanti.svg";
import fasi from "../immagini/Group 10.svg";
import {Link} from 'react-router-dom';
import './Pages.css';
import "@fontsource/nanum-pen-script"; // Defaults to weight 400.


function Page6() {

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
            <div className="panel6">
                <div className="guideframe">
                    <div className="guide">
                        Scarica la tua opera
                    </div>
                </div>

                <div className="loadOptions">
                    <div className="loadsx">
                        <div>
                            <img src={share} className="icon" />
                        </div>
                        <div className="loadLabel">
                            Condividila
                        </div>
                    </div>
                    <div className="loaddx">
                        <div>
                            <img src={image} className="icon" />
                        </div>
                        <div className="loadLabel">
                            Salva in Galleria
                        </div>
                    </div>
                </div>
                <div className="consiglioFrame">
                    <div className="consiglio">
                         Inviatela su Whatsapp (così non la perdi)
                    </div>
                </div>

                <div className="pagineOptions">
                    <Link to="/page7">
                        <div className="buttonAvanti6">
                        <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to ="/page5">
                        <div className="buttonIndietro6">
                            <img src={avanti} className="indietro" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
  }
  
export default Page6;
