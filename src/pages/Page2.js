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



export default function Page2() {

    const alert = useAlert();

    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

    window.scrollTo(0, 0);

    const [show, setShow] = useState(false);

    const [qrFound, setFound] = useState(false)

    const [qrOptions, setQrOptions] = useState(
        {
            data : "https://master.d2g7knv9wv4iw9.amplifyapp.com/",
            width: 1000,
            height: 1000,
            type: "svg",
            margin: 2,
            image: "",
            dotsOptions: {
                color: "#000000",
                type: "square",
                gradient : ""
            },
            imageOptions: {
                crossOrigin: "anonymous",
                hideBackgroundDots: false,
                imageSize : 0.3,
                margin: 5
            },
            cornersSquareOptions: {
                color: "#000000",
                type: "square",
                gradient : ""
            },
            cornersDotOptions: {
                color: "#000000",
                type: "square",
                gradient : ""
            },
        },
    )

    const [qrCode, setQrcode] = useState(new QRCodeStyling(qrOptions))
    useEffect(() => {
        qrCode.update(qrOptions)
    })

    qrCode.append(document.getElementById("qrPanel"))
    qrCode.update(qrOptions)

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
                        <div onClick={() => setShow((s) => true)}>
                            <img src={camera} className="icon" alt={"camera icon"}/>
                        </div>
                        <div className="loadLabel">
                            Fotocamera
                        </div>
                    </div>
                    <div className="loaddx" onClick={onImageSelectorClick}>
                        <div onClick={() => setShow((s) => true)}>
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
                        <Link to={{pathname : '/page25' , state: { qrOptions : qrOptions }}} >
                            <div className="buttonAvanti"  style={{ display: show ? "block" : "none" }}>
                                <img src={avanti} className="avanti" />
                            </div>
                        </Link>

                        <Link to ="/page1" >
                            <div className="buttonIndietro" onClick={() => setShow((s) => false)}>
                                <img src={avanti} className="indietro" />
                            </div>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}


