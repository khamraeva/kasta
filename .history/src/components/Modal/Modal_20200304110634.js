import React, { Component } from 'react';
import './modal.css';

export default class Modal extends Component {
    render() {
        return (
            <div className='modal'>
                <p className='success'>Оплата пройшла успішно!</p>
            </div>
            
        )
    }
}