import React, {useRef, useState} from "react";
import qr from '../immagini/qrpng.png';
import camera from "../immagini/Camera.png";
import image from "../immagini/Image.png";
import avanti from "../immagini/avanti.png";
import fasi from "../immagini/Group 5.png";
import {Link} from 'react-router-dom';
import './Pages.css';
import jsQR from "jsqr";
import {get} from '@andreekeberg/imagedata'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import {Switch,Route,Redirect, withRouter} from 'react-router-dom';

function Page2() {

    const [cameraIsVisible, setCameraVisibility] = useState(false);

    const inputFile = useRef(null)

    function onImageSelectorClick(){
        inputFile.current.click();
    }

    function notifyQrCodeFound(code){
        console.log(code)
    }

    function notifyQrCodeNotFound(){
        console.log("non ho trovato nessun qr")
    }

    function onImageInput(file){
        get(file, (error, imageData) => {
            if (error) {
                console.log(error)
            } else {
                let code = jsQR(imageData.data, imageData.width, imageData.height);
                if (code) {
                    notifyQrCodeFound(code.data)
                } else {
                    notifyQrCodeNotFound()
                }
            }
        })
    }


    function handleTakePhoto(dataUri) {
        get(dataUri, (error, imageData) => {
            if (error) {
                console.log(error)
            } else {
                let code = jsQR(imageData.data, imageData.width, imageData.height);
                if (code) {
                    notifyQrCodeFound(code.data)
                } else {
                    notifyQrCodeNotFound()
                }
            }
        })
        setCameraVisibility(false)
    }


    function onCameraInputClick() {
        setCameraVisibility(true)
    }

    return (
        <div>
            <div className="fase">
            <img src={fasi}  />
            </div>
            <div className="qrframe">
                <div className="frame">
                    <img src={qr}  className="qr" alt={"qr icon"}/>
                </div>
            </div>
            <div className="panel">
                <div className="guideframe">
                    <div className="guide">
                        Carica il tuo greenpass
                    </div>
                </div>
                <div className="loadOptions">
                    <div className="loadsx" onClick={onCameraInputClick}>
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
                <div>
                    {cameraIsVisible && <Camera
                        onTakePhotoAnimationDone = { (dataUri) => { handleTakePhoto(dataUri); } }
                    />}
                </div>
                <footer>
                <div className="pagineOptions">
                    <Link to="/page3">
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
  
export default Page2;
