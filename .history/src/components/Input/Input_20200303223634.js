import React from 'react';
import ArrowTooltips from '../Tooltip/Tooltip';
import './input.css';

export default function Input (props) {
   const formErrors = props.formErrors.name;
  return (
    <div className={props.inputClass}>
    <label> {props.label} </label><ArrowTooltips title={props.tooltipTitle} /> <br/>
    <input type='text' name={props.name} placeholder={props.placeholder} 
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