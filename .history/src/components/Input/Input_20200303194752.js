import React from 'react';
import './input.scss';


export default function ArrowTooltips(props) {
  return (
    <div className={props.inputClass}>
    <label> {props.label} </label><ArrowTooltips title={props.tooltipTitle} /> <br/>
    <input type={props.type} name={props.name} placeholder={props.placeholder} 
            value={props.value} onChange={this.onChange} /><br/>
    
    <div className='span'>
    {
        this.state.formErrors.cardholder ?  
        <span className='error'>{props.errorMessage}</span>  : ''
    }
    </div>
</div>
  );
}