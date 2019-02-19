import React from 'react';
import "./Input.css"

const Input = (props) => {
    const {
        type, value, id, name, label, placeholder, errors, onChange } = props;
    return (
        <div className="inputContainer">
        <label htmlFor={id}>
                    {label}
            <div className="inputWrapper">
                
                    <input
                        type={type}
                        value={value}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        onChange={(ev) => onChange && onChange(ev)}
                    />
                
            </div>
            </label>

            {errors && errors.errorsObj[name] && <div className="error-wrapper">
                <p className="error"> {errors.errorObj[name].message}</p>
            </div>
            }
        </div>

    )

}
export default Input
