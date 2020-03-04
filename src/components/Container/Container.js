import React, { Component } from 'react';
import Header from '../Header/Header';
import PayForm from '../PayForm/PayForm';
import PayLogos from '../PayLogos/PayLogos';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './container.css';

export default class Container extends Component {
    render() {
        return (
            <div className='shadow'>
                <div className='main-container'>
                    <span className='times'><FontAwesomeIcon icon={faTimes} /></span>
                    <div className='form-container'>           
                        <Header />
                        <PayForm />
                        <PayLogos />  
                        <Footer />   
                    </div>
                </div>
            </div>
            
        )
    }
}
