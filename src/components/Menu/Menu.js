import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import './Menu.css';

export default class Menu extends Component {
    render(){
        return (
            <div className="menu-container">
                <div className="menu-item">
                    <p>Accounts</p>
                    <FontAwesome.FaChevronCircleDown
                    className="menu-icon" />
                </div>

                <div className="menu-item">
                     <p>Account settings</p>
                </div>
                <div className="menu-item">
                     <p>Change password</p>
                </div>
                <div className="menu-item">
                     <p>Transactions</p>
                </div>
                <div className="menu-item">
                <FontAwesome.FaSignOut
                className="logout-icon" />
                    <p>Logout</p>
                </div>
            </div>
        )
    }
}