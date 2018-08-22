import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa'
import './Balance.css';

export default class Balance extends Component {
    render(){
        return(
            <div className="otro-cont-test">
           <div className="balance-container">
            <div className="user-information-balance">
                <div className="user-img-container">
                    <img className="user-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFANoiGzwMeVa4PdAnNJ3GBAZbA-TDlCnubGAc7oR6nbmaYo5k" />
                </div>
                    <div className="token-information-card">
                        <div className="token">
                            <p className="first-p"> Name: </p>
                            <p> Carolina Maffia </p>
                        </div>
                        <div className="token">
                            <p className="first-p"> Adress: </p>
                            <p> 0x7sd7a90ds098d3nj34j5j </p> 
                        </div>
                        <div className="token">
                            <p className="first-p">Tokens in your wallet:</p>
                            <p> 100
                            <FontAwesome.FaStar
                                className="token-icon"
                                size={24}/> 
                            </p> 
                        </div>
                    </div>
                </div>

            <div className="send-token-container">
                <button className="pulse"> Send Token  </button>
            </div>
            </div>
           
           </div>
        )
    }
}