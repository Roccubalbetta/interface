import React from "react";
import qr from '../immagini/Qr.png';
import avanti from "../immagini/Avanti.svg";
import {Link} from 'react-router-dom';
import fasi from "../immagini/Group 7.svg";
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
  
    class Colore2 extends React.Component {
    
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


function Page3() {

    let root = document.documentElement;

    root.style.setProperty('--green', "#FFFFFF");

    window.scrollTo(0, 0);
    
    return (
        <div>
             <div className="fase">
            <img src={fasi}  />
            </div>

            <div className="qrframe">
                <div className="frame">
                    <img src={qr}  className="qr"/>
                </div>
            </div>

            <div className="panel3">

                <div className="guideframe">
                    <div className="guide">
                        Scegli il colore
                    </div>
                </div>

                <div className="colorframe">
                    <div className="colore">
                        Colore
                    </div>

                    <div className="colortable">
                    <Colore1/>
                    </div>
                </div>

                <div className="gradientframe">
                    <div className="colore">
                        Gradiente
                    </div>
                    <div className="gradienttable">
                    <Colore2 />
                    </div>
                </div>

                <footer>
                <div className="pagine3Options">
                    <Link to="/page4">
                        <div className="buttonAvanti">
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>
                    
                    <Link to ="/page25">
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
  
export default Page3;
