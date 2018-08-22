import React, { Component } from 'react';
import LoginForm from '../../components/Login-form/LoginForm';
import './Login.css';


export default class Login extends Component {
    render(){
        return(
        <div className="container">    
            <LoginForm />
        </div>
        )
    }
}