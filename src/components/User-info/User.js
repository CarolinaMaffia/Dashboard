import React, { Component } from 'react';
import './User.css';


export default class User extends Component {
    render(){
        return (
            <div className="user-container">
                <div className="user-avatar">
                    <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFANoiGzwMeVa4PdAnNJ3GBAZbA-TDlCnubGAc7oR6nbmaYo5k" alt="avatar del user" />
                </div>
                <div className="user-information">
                    <p> User  name </p>
                    <p> useremail@truenorth.co </p>
                </div>
            </div>
        )
    }
}