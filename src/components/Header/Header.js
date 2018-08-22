import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import Sidebar from '../Sidebar/Sidebar';
import './Header.css';


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false
        };
        this.showSidebar = this.showSidebar.bind(this);
    }

    showSidebar() {
        console.log('show this shit');
        this.setState({
            showSidebar: !this.state.showSidebar 
        });
        console.log(this.state.showSidebar);
    }

    render(){
        return (
            <div className="Header-container">
                <div className="header">
                    <FontAwesome.FaBars
                        onClick={this.showSidebar}
                        aria-label="open drawer"
                        size={30}
                        className="burger-menu"
                    />
                </div>
                <Sidebar show={this.state.showSidebar} />
            </div>


        )
    }
}
