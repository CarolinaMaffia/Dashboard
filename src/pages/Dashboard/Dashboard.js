import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Balance from '../../components/Balance/Balance';
import Transaction from '../../components/Transactions/Transactions';
import Global from '../../components/Global/Global';
import * as FontAwesome from 'react-icons/lib/fa';
import './Dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="dashboard-container">
                    <h3>  
                    <FontAwesome.FaHome
                        className="dashboard-icon" 
                    /> 
                        Dashboard 
                    </h3>
                    <div className="balance-info-container">
                        <Balance />
                        <Transaction />
                        <Global />
                    </div>
                </div>
            </div>
        )        
    }
}