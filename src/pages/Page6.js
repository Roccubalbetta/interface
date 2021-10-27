import React from "react";
import qr from '../immagini/qr.svg';
import share from '../immagini/Share.svg';
import image from "../immagini/Image.svg";
import avanti from "../immagini/Avanti.svg";
import fasi from "../immagini/Group 9.svg";
import {Link} from 'react-router-dom';
import './Pages.css';


import {Switch,Route,Redirect, withRouter} from 'react-router-dom';

function Page6() {

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
                <div className="consiglio">
                    Inviatela su whatsapp (così non la perdi)
                </div>
                <footer>
                <div className="pagineOptions">
                    <Link to="/page7">
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
  
export default Page6;
