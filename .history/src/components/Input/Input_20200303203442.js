import React, { Component } from 'react';
import ArrowTooltips from '../Tooltip/Tooltip';
import './input.css';

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
            submitted: false
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

  return (
    <div className={props.inputClass}>
        <label> {props.label} </label><ArrowTooltips title={props.tooltipTitle} /> <br/>
        <input type={props.type} name={props.name} placeholder={props.placeholder} 
                value={props.value} 
                onChange={props.onChange} 
                /><br/>
        
        <div className='span'>
        {
            {formErrors} ?  
            <span className='error'>{props.errorMessage}</span>  : ''
        }
        </div>
    </div>
  );
}