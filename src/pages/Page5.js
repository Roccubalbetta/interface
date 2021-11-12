import React from "react";
import qr from '../immagini/Qr.png';
import avanti from "../immagini/Avanti.svg";
import fasi from "../immagini/Group 9.svg";
import {Link} from 'react-router-dom';
import './Pages.css';

import { CirclePicker } from "react-color";

class Colore1 extends React.Component {

    state = {
      start: "#000000",
    };
  
    handleChangeComplete = (color) => {
      this.setState({ ...this.state, start: color.hex  });
    };
    
      render() {
        return (
          <CirclePicker 
              color={this.state.start}
              colors={["#000000", "#e91e63", "#9c27b0", "#673ab7",
                       "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]}
              circleSize={45}
              circleSpacing={35}
              width={{width: "100%"}}
              onChangeComplete={ this.handleChangeComplete }
              >
          </CirclePicker>
        );
      }
    }


function Page5() {

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

            <div className="panel5">
                <div className="guideframe">
                    <div className="guide">
                        Un ultimo tocco
                    </div>
                </div>
                <div className="colorframe">
                    <div className="colore">
                        Cornice
                    </div>
                    <div className="colortable">
                    <div className="scelta1"></div>
                    <div className="scelta2"></div>
                    <div className="scelta3"></div>
                    <div className="scelta4"></div>
                    <div className="scelta5"></div>
                    <div className="scelta6"></div>
                    <div className="scelta7"></div>
                    <div className="scelta8"></div>
                    </div>
                </div>

                <div className="scrittaframe">
                    <div className="colore">
                        Scritta
                    </div>
                        <textarea className="text" cols="30" rows="2"></textarea>
                </div>

                <div className="fontframe">
                    <div className="colore">
                        Font
                    </div>
                    <div>
                        <select className="tendina">
                            <option></option>
                            <option value="SO">Sistemi Operativi</option>
                            <option value="TW">Tecnologie Web</option>
                            <option value="SM">Sistemi Multimediali</option>
                        </select>
                    </div>
                </div>

                <div className="coloreScrittaFrame">
                    <div className="colore">
                        Colore scritta
                    </div>
                    <div className="colortable">
                    <Colore1 />
                    </div>
                </div>

                <div className="pagine5Options">
                    <Link to="/page6">
                        <div className="buttonAvanti">
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to ="/page4">
                        <div className="buttonIndietro">
                            <img src={avanti} className="indietro" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
  }
  
export default Page5;
