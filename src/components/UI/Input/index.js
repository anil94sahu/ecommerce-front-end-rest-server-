import React from 'react'

export default function Input(props) {
    return (
        <div className="form-group">
            <label for="exampleInputPassword1">{props.label}</label>
            <input type= {props.type} className="form-control" id="exampleInputPassword1" placeholder={props.placeholder} 
            onChange={props.onChange} value = {props.value}
            />
            <small id="emailHelp" className="form-text text-muted">{props.error}</small>

        </div>
    )
}
