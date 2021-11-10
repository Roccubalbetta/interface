import React from "react";
import {Link} from 'react-router-dom';
import './Pages.css';


function Page1() {

    var scale = 'scale(1)';
    document.body.style.transform = scale;     // General

    let root = document.documentElement;

    root.style.setProperty('--green', "#F1FAEE");

    window.scrollTo(0, 0);
    return (

        <>
            <div>
                <h1 className="title">Rendi il tuo greenpass unico</h1>
            </div>
            <div>
                <h2 className="descr">Personalizza il tuo greenpass in 30 secondi, gratis</h2>
            </div>
            <div className="footer">
                <Link to="/page2">
                    <button className="iniziaButton">
                        <h2 className="inizia">
                            Inizia
                        </h2>
                    </button>
                </Link>
                <div className="tranqui">
                    Gratis e sicuro: non ti fidi?<Link to='/legal' style={{ color: "#1D3557" }}>Tranquillizzati qui</Link>
                </div>
            </div>
        </>
    )
  }
  
export default Page1;
