import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import './LoginForm.css';


export default class LoginForm extends Component{
    render(){
        return (
            <div className="form-container">
                <div className="logo-container">
                    <img alt="logo imagen"/>
                </div>

                <label>
                    <FontAwesome.FaBars />
                    <p> Username </p>
                </label>

                <div className="input-container">
                    <input/>
                </div>

                <label>
                    <FontAwesome.FaBars />
                    <p> Password </p>
                </label>

                <div className="input-container">
                    <input/>
                </div>

                <div className="button-container">
                    <button/>
                </div>


            </div>
        )
    }
}