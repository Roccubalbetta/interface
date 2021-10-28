import React from "react";
import qr from '../immagini/qr.svg';
import avanti from "../immagini/Avanti.svg";
import fasi from "../immagini/Group 8.svg";
import {Link} from 'react-router-dom';
import './Pages.css';


import {Switch,Route,Redirect, withRouter} from 'react-router-dom';

function Page5() {

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

            <div className="panel5">
                <div className="guideframe">
                    <div className="guide">
                        Un ultimo tocco
                    </div>
                </div>
                <div className="colorframe">
                    <div className="colore">
                        Cornice
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

                <div className="scrittaframe">
                    <div className="colore">
                        Scritta
                    </div>
                        <textarea className="text" cols="30" rows="2"></textarea>
                </div>

                <div className="fontframe">
                    <div className="colore">
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
                </div>

                <div className="coloreScrittaFrame">
                    <div className="colore">
                        Colore scritta
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
                        <div className="colore9"></div>
                    </div>
                </div>

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
            </div>
        </>
    )
  }
  
export default Page5;
