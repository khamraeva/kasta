import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import ArrowTooltips from '../Tooltip/Tooltip'
import './payform.css';

export default class PayForm extends Component {
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
                        <input type="text" name="card-number" value="#### #### #### ####"/>
                    </div>

                    <div className='expiring'>
                        <label> Термін дії </label><br/>
                        <input type="text" name="card-expiring" value="MM / PP" />
                    </div>

                    <div className='card-owner'>
                        <label> Власник карти </label><ArrowTooltips /> <br/>
                        <input type="text" name="card-expiring" value="MM / PP" />
                    </div>
                </form>
                
            </div>
        )
    }
}
