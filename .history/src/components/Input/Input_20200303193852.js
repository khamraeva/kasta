import React from 'react';
import './input.scss';


export default function ArrowTooltips(props) {
  return (
    <div className='cardholder'>
    <label> {props.label} </label><ArrowTooltips title={'Фамілія та ім`я людини на яке віпущена картка. Для именних карт - нанесено на карту.'} /> <br/>
    <input type="text" name="cardholder" placeholder="CARDHOLDER NAME" value={this.state.cardholder} onChange={this.handleInputChange} /><br/>
    
    <div className='span'>
    {
        this.state.formErrors.cardholder ?  
        <span className='error'>{this.state.cardholderError}</span>  : ''
    }
    </div>
</div>
  );
}