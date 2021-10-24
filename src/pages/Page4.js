import React from "react";
import qr from '../immagini/qrpng.png';
import avanti from "../immagini/avanti.png";
import image from "../immagini/Image.png";
import {Link} from 'react-router-dom';
import './Pages.css';


import {Switch,Route,Redirect, withRouter} from 'react-router-dom';

function Page4() {
    return (
        <div>
            <div>
            </div>
            <div className="qrframe">
                <div className="frame">
                    <img src={qr}  className="qr"/>
                </div>
            </div>
            <div className="panel">
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
                <div className="pagine2Options">
                    <Link to="/page5">
                        <div className="buttonAvanti">
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to ="/page3">
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
  
export default Page4;