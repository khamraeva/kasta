import React from 'react';


const Input = props => {
    const inputType = props.type || 'text';

        return (
            <div>
                <label> {props.label} </label>
                <input
                    type={inputType}
                />
            </div>
        )
}
export default Input