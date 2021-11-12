import React from "react";
import qr from '../immagini/Qr.png';
import {Link} from 'react-router-dom';
import fasi from "../immagini/Group 11.svg";
import './Pages.css';



function Page7() {

    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

    window.scrollTo(0, 0);
    
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

            <div className="panel7">
                <div className="guideframe">
                    <div className="guide">
                       Hai finito!
                    </div>
                </div>

                <div className="loadconclusione">
                    <div className="conclusione">
                        <div className="subConc">
                            E ora?
                        </div>
                        
                        <div className="testoConc">
                            Non resta che usare il tuo nuovo “accessorio”
                        </div>
                    
                        <div className="subConc">
                            Che progetto bellissimo! Come potrò mai ripagarvi?<br/>
                        </div>

                        <div className="testoConc">
                            Grazie mille! Se ci tieni a essere anche te partecipe di questo progetto, puoi offrire un caffè agli sviluppatori con il bottone qui sotto.<br/>
                        </div>

                        <div className="subConc">
                            Oppure?<br/>
                        </div>

                        <div className="testoConc">
                            Puoi condividere il progetto con un amic*! é gratis e noi siamo contenti lo stesso!
                        </div>

                    </div>

                    <button className="caffeButtonConc">
                        <Link to='/page1'className="caffe">Offrici un caffè</Link>
                    </button>
                    <div>
                        <Link to='/page1'className="backHomeConc">Torna alla home</Link>
                    </div>

                </div>
            </div>
        </>
    )
  }
  
export default Page7;
