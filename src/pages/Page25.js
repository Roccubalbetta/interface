import React from "react";
import qr from '../immagini/Qr.png';
import avanti from "../immagini/Avanti.svg";
import {Link} from 'react-router-dom';
import fasi from "../immagini/Group 6.svg";
import './Pages.css';

import { useState } from "react";


  function DotPicker({onPick}) {

    const images = ["squares.png", "extraRounded.png", "dots.png", "rounded.png", "classy.png", "classyRounded.png"]
  
    const [image, setImage] = useState(0)
  
    return (
        <>
        <div>
            {/*{colors[color]}*/}
        </div>
        <div>
            {images.map(( im , i )=> <div style={{ backgroundImage: `url(${im})`}} className={i == image? "squaresSelected":"squares" } onClick={ () => {
                onPick(i);
                setImage(i);
            }}></div>)}
        </div>
  
        </>
    )
  
  
  }

  function CornerSquarePicker({onPick}) {

    const images = ["cornerSquare.png", "dot.png", "extraRound.png", "classyCorner.png"]
  
    const [image, setImage] = useState(0)
  
    return (
        <>
        <div>
            {/*{colors[color]}*/}
        </div>
        <div>
            {images.map(( im , i )=> <div style={{ backgroundImage: `url(${im})`}} className={i == image? "CornerSquareSelected":"CornerSquare" } onClick={ () => {
                onPick(i);
                setImage(i);
            }}></div>)}
        </div>
  
        </>
    )
  
  
  }

  function CornerDotPicker({onPick}) {

    const images = ["squareCornerDot.png", "cornerDot.png", "classyCornerDot.png"]
  
    const [image, setImage] = useState(0)
  
    return (
        <>
        <div>
            {/*{colors[color]}*/}
        </div>
        <div>
            {images.map(( im , i )=> <div style={{ backgroundImage: `url(${im})`}} className={i == image? "CornerSquareSelected":"CornerSquare" } onClick={ () => {
                onPick(i);
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
                    <DotPicker onPick={ (c) => console.log(c)} />
                    </div>
                </div>

                <div className="gradientframe">
                    <div className="colore">
                        Cornice Quadrati Grandi
                    </div>
                    <div className="colortable">
                    <CornerSquarePicker onPick={ (c) => console.log(c)} />
                    </div>
                </div>

                <div className="dotframe">
                    <div className="colore">
                    Cornice Quadrati Piccoli
                    </div>
                    <div className="colortable">
                    <CornerDotPicker onPick={ (c) => console.log(c)} />
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
