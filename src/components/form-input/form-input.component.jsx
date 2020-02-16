/* eslint-disable no-unused-vars */
import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div classname='group'>
    <input className='form-input' onchange={handleChange} {...otherProps} />
    {
      label ? (<label className='form-input-label'>{label}</label>) : null
    }
  </div>
);

export default FormInput;