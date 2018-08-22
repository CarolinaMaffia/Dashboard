import React, { Component } from 'react';
import User from '../User-info/User';
import Menu from '../Menu/Menu'
import './Sidebar.css';


export default class Sidebar extends Component{

    render(){
        return (
            <div className={
                this.props.show
                    ? "sidebar-container show"
                    : "sidebar-container"
            }>
                <User />
                <Menu />
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
            </div>
        )
    }
}