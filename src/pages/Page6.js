import React, {useEffect, useRef, useState} from "react";
import qr from '../immagini/Qr.png';
import share from '../immagini/Share.svg';
import image from "../immagini/Image.svg";
import avanti from "../immagini/Avanti.svg";
import fasi from "../immagini/Group 10.svg";
import {Link, useLocation} from 'react-router-dom';
import './Pages.css';
import "@fontsource/nanum-pen-script";
import {defaultQrOptions} from "../utilities";
import QRCodeStyling from "qr-code-styling";
import {useDispatch, useSelector} from "react-redux"; // Defaults to weight 400.


function Page6() {

    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

    window.scrollTo(0, 0);

    const qrPanel = useRef()

    const qrOptions = useSelector(state => state.qrOptions.value)
    const dispatch = useDispatch()

    const [qrFound, setFound] = useState(qrOptions.data !== defaultQrOptions.data)

    const [qrCode] = useState(new QRCodeStyling(qrOptions))

    useEffect(() => {
        qrCode.append(qrPanel.current)
    })

    useEffect(() => {
        qrCode.update(qrOptions)
    },[qrCode, qrOptions])

    const onDownloadClicked = () => {
        qrCode.download({extension : "jpeg"})
    }
    
    return (
        <>
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
                        Scarica la tua opera
                    </div>
                </div>

                <div className="loadOptions">
                    <div className="loadsx">
                        <div>
                            <img src={share} className="icon" />
                        </div>
                        <div className="loadLabel">
                            Condividila
                        </div>
                    </div>
                    <div className="loaddx">
                        <div onClick={onDownloadClicked}>
                            <img src={image} className="icon" />
                        </div>
                        <div className="loadLabel">
                            Salva in Galleria
                        </div>
                    </div>
                </div>

                <div className="consiglio">
                    Inviatela su Whatsapp (così non la perdi)
                </div>

                <div className="pagineOptions">
                    <Link to="/page7">
                        <div className="buttonAvanti">
                        <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to={{pathname : "/page5", state : {}}}>
                        <div className="buttonIndietro">
                            <img src={avanti} className="indietro" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
  }
  
export default Page6;
