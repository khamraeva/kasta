import React from 'react';

export const FormErrors = ({errors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((name, i) => {
      if(formErrors[name].length > 0){
        return (
          <p key={i}>{name} {formErrors[name]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>