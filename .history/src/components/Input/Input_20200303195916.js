import React from 'react';
import ArrowTooltips from '../Tooltip/Tooltip';
import './input.css';

export default function Input (props) {
   const renderCondition = props.renderCondition;
  return (
    <div className={props.inputClass}>
    <label> {props.label} </label><ArrowTooltips title={props.tooltipTitle} /> <br/>
    <input type={props.type} name={props.name} placeholder={props.placeholder} 
            value={props.value} 
            onChange={this.onChange} 
            /><br/>
    
    <div className='span'>
    {
        {renderCondition} ?  
        <span className='error'>{props.errorMessage}</span>  : ''
    }
    </div>
</div>
  );
}