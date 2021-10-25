import React from "react";
import qr from '../immagini/qrpng.png';
import avanti from "../immagini/avanti.png";
import fasi from "../immagini/Group 8.png";
import {Link} from 'react-router-dom';
import './Pages.css';


import {Switch,Route,Redirect, withRouter} from 'react-router-dom';

function Page5() {
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
                        Un ultimo tocco
                    </div>
                </div>
                <div className="loadOptions">
                    <div className="colore">
                        Cornice
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
                        Scritta
                    </div>
                    <div>
                        <textarea className="text" cols="30" rows="2"></textarea>
                    </div>
                    <div className="fontlabel">
                        Font
                    </div>
                    <div>
                    <select className="tendina">
                        <option></option>
                        <option value="SO">Sistemi Operativi</option>
                        <option value="TW">Tecnologie Web</option>
                        <option value="SM">Sistemi Multimediali</option>
                    </select>
                    </div>
                    <div>

                    </div>
                    <div className="colorescritta">
                        Colore scritta
                    </div>
                    <div className="colorescritta1"></div>
                    <div className="colorescritta2"></div>
                    <div className="colorescritta3"></div>
                    <div className="colorescritta4"></div>
                    <div className="colorescritta5"></div>
                    <div className="colorescritta6"></div>
                    <div className="colorescritta7"></div>
                    <div className="colorescritta8"></div>
                    <div className="colorescritta9"></div>
                    <div className="colorescritta10"></div>
                </div>
                <footer>
                <div className="pagine5Options">
                    <Link to="/page6">
                        <div className="buttonAvanti">
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to ="/page4">
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
  
export default Page5;
