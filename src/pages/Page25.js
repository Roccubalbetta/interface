import React from "react";
import qr from '../immagini/Qr.png';
import avanti from "../immagini/Avanti.svg";
import {Link} from 'react-router-dom';
import fasi from "../immagini/Group 6.svg";
import squares from "../immagini/squares.png";
import './Pages.css';

import { useState } from "react";


  function ImagePicker({onPick}) {

    const images = ["squares", "#e91e63", "#9c27b0", "#673ab7",
        "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]
  
    const [image, setImage] = useState(0)
  
    return (
        <>
        <div>
            {/*{colors[color]}*/}
        </div>
        <div>
            {images.map(( im , i )=> <div style={{background: "../immagini/squares.png"}} className={i == image? "squaresSelected":"squares" } onClick={ () => {
                onPick(im);
                setImage(i);
            }}></div>)}
        </div>
  
        </>
    )
  
  
  }


function Page25() {

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

            <div className="panel25">

                <div className="guideframe">
                    <div className="guide">
                        Scegli il colore
                    </div>
                </div>

                <div className="colorframe">
                    <div className="colore">
                        Quadrati grandi
                    </div>

                    <div className="colortable">
                    <ImagePicker onPick={ (c) => console.log(c)} />
                    </div>
                </div>

                <div className="gradientframe">
                    <div className="colore">
                        Quadrati piccoli
                    </div>
                    <div className="colortable">
                    <ImagePicker onPick={ (c) => console.log(c)} />
                    </div>
                </div>

                <div className="dotframe">
                    <div className="colore">
                        Quadrati piccoli
                    </div>
                    <div className="colortable">
                    <ImagePicker onPick={ (c) => console.log(c)} />
                    </div>
                </div>

                <footer>
                <div className="pagine25Options">
                    <Link to="/page3">
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
  
export default Page25;
