import React, {useRef} from "react";
import qr from '../immagini/qrpng.png';
import camera from "../immagini/Camera.png";
import image from "../immagini/Image.png";
import avanti from "../immagini/avanti.png";
import {Link} from 'react-router-dom';
import './Pages.css';
import jsQR from "jsqr";
import {get} from '@andreekeberg/imagedata'

import {Switch,Route,Redirect, withRouter} from 'react-router-dom';

function Page2() {

    const inputFile = useRef(null)

    function onImageSelectorClick(){
        inputFile.current.click();
    }

    function notifyQrCodeFound(){}

    function notifyQrCodeNotFound(){}

    function onImageInput(file){
        get(file, (error, imageData) => {
            if (error) {
                console.log(error)
            } else {
                let code = jsQR(imageData.data, imageData.width, imageData.height).data;
                if (code) {
                    notifyQrCodeFound()
                } else {
                    notifyQrCodeNotFound()
                }
            }
        })
    }

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
                        Carica il tuo greenpass
                    </div>
                </div>
                <div className="loadOptions">
                    <div className="loadsx">
                        <div>
                            <img src={camera} className="icon" alt={"camera icon"}/>
                        </div>
                        <div className="loadLabel">
                            Fotocamera
                        </div>
                    </div>
                    <div className="loaddx" onClick={onImageSelectorClick}>
                        <div>
                            <img src={image} className="icon" alt={"gallery icon"}/>
                        </div>
                        <div className="loadLabel">
                            Galleria
                        </div>
                        <input type="file" ref={inputFile} accept="image/png, image/jpeg" onChange={ e => (onImageInput(e.target.files[0])) } style={{display: 'none'}}/>
                    </div>
                </div>
                <footer>
                <div className="pagineOptions">
                    
                        <div className="buttonAvanti">
                        <img src={avanti} className="avanti" />
                        </div>
                    
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
  
export default Page2;
