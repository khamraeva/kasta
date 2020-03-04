import React from 'react';


const Input = props => {
    const inputType = props.type || 'text';


        return (
            <div>
                <label> {props.label} </label>
                <input
                    type={inputType}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        )
}
export default Input