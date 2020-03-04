import React from 'react';
import classNames from 'classnames/bind';
import './input.scss';

const inputClass  = classNames('btn', this.props.className, {
    'btn-pressed': this.state.isPressed,
    'btn-over': !this.state.isPressed && this.state.isHovered
  });
export default function ArrowTooltips(props) {
  return (
    <div className={inputClass}>
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