import React from "react";
import {Link} from 'react-router-dom';
import './Pages.css';


function Page1() {
    return (
        <div>
            <div>
                <h1 className="title">Rendi il tuo greenpass unico</h1>
            </div>
            <div>
                <h2 className="descr">Personalizza il tuo greenpass in 30 secondi, gratis</h2>
            </div>
            <div className="footer">
                <Link to="/page2">
                    <div className="iniziaButton">
                        <h2>
                            <div className="inizia">inizia</div>
                        </h2>
                    </div>
                </Link>
                <div className="tranqui">
                    Gratis e sicuro: non ti fidi?<Link to='/legal' style={{ color: "#1D3557" }}>Tranquillizzati qui</Link>
                </div>
            </div>
        </div>
    )
  }
  
export default Page1;
