import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import ArrowTooltips from '../Tooltip/Tooltip';
// import { FormErrors } from '../FormErrors/FormErrors';

import './payform.css';

export default class PayForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            cvv: '',
            expiryDate: '',
            cardholder: '',
            cardNumberError: '',
            expiryDateError: '',
            cardholderError: '',
            cvvError: '',
            formErrors: {cardNumber: '', cvv: '', expiryDate: '', cardholder: ''},
            cardNumberValid: false,
            expiryDateValid: false,
            cardholderValid: false,
            cvvValid: false,
        };
    }

    handleInputChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }


    validateField(name, value) {
        let fieldValidationErrors = this.state.formErrors;
        let cardNumberValid = this.state.cardNumberValid;
        let expiryDateValid = this.state.expiryDateValid;
        let cardholderValid = this.state.cardholderValid;
        let cvvValid = this.state.cvvValid;
        // const errors = [];
        switch(name) {
            case 'cardNumber':
                // if (!value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/)) {       
                //     errors.push({ name, value });
                //     this.setState({cardNumberError: 'Невірна картка'});
                // } 
                cardNumberValid = value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/);
                fieldValidationErrors.cardNumber = cardNumberValid ? '' : ' is invalid';
                this.setState({cardNumberError: 'Невірна картка'});
                break;
    
            case 'cardholder':
                cardholderValid = value.length > 0 && typeof value === 'string';
                fieldValidationErrors.cardholder = cardholderValid ? '' : ' is invalid';
                this.setState({cardholderError:'Введить ПІБ власніка картки'});
                break;
                // if (!value.length) {
                //     errors.push({ name, value });
                //     this.setState({cardholderError:'Введить ПІБ власніка картки'});
                // }
                // break;
            case 'cvv':
                cvvValid = value.match(/^[0-9]{3}$/);
                fieldValidationErrors.cvv = cvvValid ? '' : ' is invalid';
                this.setState({cvvError:'Введіть CVV'});
                break;
                // if (!value.match(/^[0-9]{3}$/)) {
                //     errors.push({ name, value });
                // }
                // break;
            case 'expiryDate':
                expiryDateValid = value.match(/(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/);
                fieldValidationErrors.expiryDate = expiryDateValid ? '' : ' is invalid';
                this.setState({expiryDateError: 'Невірний термін'});
                break;
                // if (!value.match(/(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)) {
                //     errors.push({ name, value });
                //     this.setState({expiryDateError: 'Невірний термін'});
                // }
                // break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            cardNumberValid: cardNumberValid,
            expiryDateValid: expiryDateValid,
            cardholderValid: cardholderValid,
            cvvValid: cvvValid
          }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.cardNumberValid && this.state.expiryDateValid && 
            this.state.cardholderValid && this.state.cvvValid});
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
                        <input type="text" name="cardNumber" placeholder="#### #### #### ####" pattern="[0-9.]+" value={this.state.cardNumber} onChange={this.handleInputChange} /><br/>
                        
                        <div className='span'>
                            {
                                this.state.formErrors.cardNumber ?  
                                <span className='error'>{this.state.cardNumberError}</span> : ''
                            }
                        </div>
                    </div>

                    <div className='expiring'>
                        <label> Термін дії </label><br/>
                        <input type="text" name="expiryDate" placeholder="MM / PP" value={this.state.expiryDate} onChange={this.handleInputChange} /><br/>
                        
                        <div className='span'>
                        {
                            this.state.formErrors.expiryDate ?  
                            <span className='error'>{this.state.expiryDateError}</span> : ''
                        }
                        </div>
                    </div>

                    <div className='cardholder'>
                        <label> Власник карти </label><ArrowTooltips /> <br/>
                        <input type="text" name="cardholder" placeholder="CARDHOLDER NAME" value={this.state.cardholder} onChange={this.handleInputChange} /><br/>
                        
                        <div className='span'>
                        {
                            this.state.formErrors.cardholder ?  
                            <span className='error'>{this.state.cardholderError}</span>  : ''
                        }
                        </div>
                    </div>

                    <div className='cvv'>
                        <label> CVV </label><ArrowTooltips /> <br/>
                        <input type="text" name="cvv" placeholder="XXX" value={this.state.cvv} onChange={this.handleInputChange} /><br/>
                        
                        <div className='span'>
                        {
                            this.state.formErrors.cvv ?  
                            <span className='error'>{this.state.cvvError}</span>  : ''
                        }
                        </div>
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

                <button className='button' disabled={!this.state.formValid}> Оплатити 123 284 грн </button>
                
                <div className='timetoleft'>на виконання платежу 00:12:35</div>

                
            </div>
        )
    }
}
