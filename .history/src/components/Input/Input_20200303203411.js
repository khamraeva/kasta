import React, { Component } from 'react';
import ArrowTooltips from '../Tooltip/Tooltip';
import './input.css';

export default function Input (props) {
   const formErrors = props.formErrors;
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