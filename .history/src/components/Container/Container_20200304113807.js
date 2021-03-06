import React, { Component } from 'react';
import Header from '../Header/Header';
import PayForm from '../PayForm/PayForm';
import PayLogos from '../PayLogos/PayLogos';
import Footer from '../Footer/Footer';
import './container.css';

export default class Container extends Component {
    render() {
        return (
            <div className='shadow'></div>
            <div className='form-container'>
                <Header />
                <PayForm />
                <PayLogos />  
                <Footer />   
            </div>
            </div>
            
        )
    }
}
