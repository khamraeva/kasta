import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import ArrowTooltips from '../Tooltip/Tooltip';

import './payform.css';

export default class PayForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            cvv: '',
            expiryDate: '',
            cardholder: '',
        };
    }

    handleInputChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }

    validateField(name, value) {
        if (name )
    }

    render() {
        return (
            <div className='container'>
                <p className='new-card'>
                    <FontAwesomeIcon icon={faDotCircle} style={{color: 'rgb(75, 137, 245)'}}/>
                    <span style={{padding: '0 5px'}}>Нова картка</span>
                </p>
                <FontAwesomeIcon icon={faCreditCard} style={{color: 'rgb(110, 124, 145)'}} className='card-icon'/>
                <p className='cards-name'> Visa, Mastercard </p>
                
                <div className='hr'/>

                <form className='card-form'>
                    <div className='card-number'>
                        <label> Номер картки </label><br/>
                        <input type="text" name="cardNumber" placeholder="#### #### #### ####" value={this.state.cardNumber} onChange={this.handleInputChange} />
                    </div>

                    <div className='expiring'>
                        <label> Термін дії </label><br/>
                        <input type="text" name="expiryDate" placeholder="MM / PP" value={this.state.expiryDate} onChange={this.handleInputChange} />
                    </div>

                    <div className='cardholder'>
                        <label> Власник карти </label><ArrowTooltips /> <br/>
                        <input type="text" name="cardholder" placeholder="CARDHOLDER NAME" value={this.state.cardholder} onChange={this.handleInputChange} />
                    </div>

                    <div className='cvv'>
                        <label> CVV </label><ArrowTooltips /> <br/>
                        <input type="text" name="cvv" placeholder="XXX" value={this.state.cvv} onChange={this.handleInputChange} />
                    </div>

                    <div className='hr'/>
                </form>
                
                <div className='remember-card'> 
                    <input
                        name="save-card"
                        type="checkbox"/>
                    <span className='save-card'> Запам'ятаті цю картку </span>
                    <ArrowTooltips /> 
                </div>

                <button className='button'> Оплатити 123 284 грн </button>
                
                <div className='timetoleft'>на виконання платежу 00:12:35</div>

                
            </div>
        )
    }
}
