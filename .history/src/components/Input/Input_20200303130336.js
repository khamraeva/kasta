import React from 'react';
import classes from'./import.scss'

const Input = props => {
    const inputType = props.type || 'text';
    const cls = [classes.Input];
    const htmlFor = `${inputType}-${Math.random()}`

        return (
            <div className={cls.join(' ')}>
                <label htmlFor={htmlFor}> {props.label} </label>
                <input
                    type={inputType}
                    id={htmlFor}
                    value={props.value}
                    onChange={props.onChange}
                />

                <span>
            </div>
        )
}
export default Input