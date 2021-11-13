import React, {useEffect, useRef, useState} from "react";
import qr from '../immagini/Qr.png';
import camera from "../immagini/Camerasvg.svg";
import image from "../immagini/Image.svg";
import avanti from "../immagini/Avanti.svg";
import fasi from "../immagini/Group 5.svg";
import {Link} from 'react-router-dom';
import './Pages.css';
import jsQR from "jsqr";
import {get} from '@andreekeberg/imagedata'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { useAlert } from "react-alert";
import QRCodeStyling from "qr-code-styling";
import {defaultQrOptions} from "../utilities";



export default function Page2() {

    const alert = useAlert();

    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

    window.scrollTo(0, 0);

    const [qrFound, setFound] = useState(false)

    const [qrOptions, setQrOptions] = useState(defaultQrOptions)

    const [qrCode] = useState(new QRCodeStyling(qrOptions))

    useEffect(() => {
        qrCode.append(document.getElementById("qrPanel"))
    })

    useEffect(() => {
        qrCode.update(qrOptions)
    }, [qrCode, qrOptions])

    const [cameraIsVisible, setCameraVisibility] = useState(false);

    const inputFile = useRef(null)

    function onImageSelectorClick() {
        inputFile.current.click();
    }

    function notifyQrCodeFound(code) {
        alert.success("ho trovato qr");
        setQrOptions({
            ...qrOptions,
            data : code
        })
        setFound(true)
    }

    function notifyQrCodeNotFound() {
        alert.show("non ho trovato nessun qr");
        console.log("non ho trovato nessun qr")
    }

    function onImageInput(file) {
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
                    {!qrFound ? <img src={qr}  className="qr" alt={"qr icon"}/> : null}
                    <svg visibility={!qrFound ? "hidden" : "visible"} id={"qrPanel"} viewBox="0 0 1000 1000" style={{width: 200}}>
                        <img src={qr}  className="qr" alt={"qr icon"}/>
                    </svg>
                </div>
            </div>
            <div className="panel2">
                <div className="guide">
                    Carica il tuo greenpass
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
                        <Link to={{pathname : '/page25' , state: {qrOptions}}} >
                            <div className="buttonAvanti"  style={{display : !qrFound ? "none" : "block"}}>
                                <img src={avanti} className="avanti" />
                            </div>
                        </Link>

                        <Link to ="/page1" >
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


