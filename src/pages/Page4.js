import React, {useEffect, useRef, useState} from "react";
import avanti from "../immagini/Avanti.svg";
import image from "../immagini/Image.svg";
import fasi from "../immagini/Group 8.svg";
import {Link, useLocation} from 'react-router-dom';
import './Pages.css';
import QRCodeStyling from "qr-code-styling";
import {useDispatch, useSelector} from "react-redux";
import {changeLogo} from "../features/qrCode/qrCodeOptions";



function Page4() {

    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

    window.scrollTo(0, 0);

    const qrPanel = useRef()

    const qrOptions = useSelector(state => state.qrOptions.value)
    const dispatch = useDispatch()

    const [qrCode] = useState(new QRCodeStyling(qrOptions))

    useEffect(() => {
        qrCode.append(qrPanel.current)
    })

    useEffect(() => {
        qrCode.update(qrOptions)
    },[qrCode, qrOptions])

    const inputFile = useRef(null)

    function onImageSelectorClick() {
        inputFile.current.click();
    }

    function onImageInput(file) {
        dispatch(changeLogo(URL.createObjectURL(file)))
    }

    function onImageRemoveClick() {
        dispatch(changeLogo(""))
    }


    return (
        <div>
            <div className="fase">
            <img src={fasi}  />
            </div>

            <div className="qrframe">
                <div className="frame">
                    <svg ref={qrPanel} viewBox="0 0 1000 1000" style={{width: 200}}/>
                </div>
            </div>

            <div className="panel">
                <div className="guideframe">
                    <div className="guide">
                        Aggiungi un logo <small>(opzionale)</small>
                    </div>
                </div>

                <div className="loadOptions">
                    <div className="loadlogo" onClick={onImageSelectorClick}>
                        <div>
                            <img src={image} className="logo" />
                        </div>
                        <div className="loadLabel" >
                            Galleria
                            <input type="file" ref={inputFile} accept="image/png, image/jpeg" onChange={ e => (onImageInput(e.target.files[0])) } style={{display: 'none'}}/>
                        </div>
                    </div>
                    <div className="rimuovilogo" onClick={onImageRemoveClick}>
                        Rimuovi
                    </div>
                </div>
                <footer>
                <div className="pagineOptions">
                    <Link to={{pathname : "/page5", state : {}}}>
                        <div className="buttonAvanti">
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to={{pathname : "/page3", state : {}}}>
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