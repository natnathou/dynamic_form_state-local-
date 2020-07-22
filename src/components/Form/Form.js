import React              from "react";
import formField          from "./json/field"
import InputTextField     from "./InputTextField";
import TextAreaField      from "./TextAreaField";
import SelectField        from './SelectField';
import RadioCheckboxField from "./RadioCheckboxField";
import PasswordField      from "./PasswordField";
import "./style/Form.css";   
   
class Form extends React.Component {

    state = {};
    
    renderInput = json => json.map( (data,index)=>{
        switch(data.type){
            case "text": 
                return (
                    <InputTextField
                        key          = {index}
                        label        = {data.label}
                        textLabel    = {data.textLabel}
                        type         = {data.type}
                        id           = {data.id}
                        required     = {data.required}
                        name         = {data.name}
                        placeholder  = {data.placeholder}
                        value        = {this.state[data.name]}
                        handleChange = {this.handleChange}
                        autocomplete = {data.autocomplete}
                    />
                )
            case "number": 
            return (
                <InputTextField
                    key          = {index}
                    label        = {data.label}
                    textLabel    = {data.textLabel}
                    type         = {data.type}
                    id           = {data.id}
                    required     = {data.required}
                    name         = {data.name}
                    placeholder  = {data.placeholder}
                    value        = {this.state[data.name]}
                    handleChange = {this.handleChange}
                    autocomplete = {data.autocomplete}
                />
            )
            case "password": 
                return (
                    <PasswordField
                        key          = {index}
                        label        = {data.label}
                        textLabel    = {data.textLabel}
                        type         = {data.type}
                        id           = {data.id}
                        required     = {data.required}
                        name         = {data.name}
                        placeholder  = {data.placeholder}
                        value        = {this.state[data.name]}
                        handleChange = {this.handleChange}
                        autocomplete = {data.autocomplete}
                    />
                )
            case "radio": 
            return (
                <RadioCheckboxField
                    key          = {index}
                    label        = {data.label}
                    textLabel    = {data.textLabel}
                    type         = {data.type}
                    id           = {data.id}
                    required     = {data.required}
                    name         = {data.name}
                    placeholder  = {data.placeholder}
                    value        = {data.value}
                    checked      = {this.state[data.name]}
                    handleChange = {this.handleChange}
                    autocomplete = {data.autocomplete}
                />
            )
            case "checkbox": 
            return (
                <RadioCheckboxField
                    key          = {index}
                    label        = {data.label}
                    textLabel    = {data.textLabel}
                    type         = {data.type}
                    id           = {data.id}
                    required     = {data.required}
                    name         = {data.name}
                    placeholder  = {data.placeholder}
                    value        = {data.value}
                    checked      = {this.state[data.name]}
                    handleChange = {this.handleChangeCheckbox}
                    autocomplete = {data.autocomplete}
                />
            )
            case "big_text": 
                return (
                    <TextAreaField
                    type         = {data.type}
                    key          = {index}
                    id           = {data.id}
                    required     = {data.required}
                    name         = {data.name}
                    value        = {this.state[data.name]}
                    handleChange = {this.handleChange}
                    autocomplete = {data.autocomplete}
                    />
                )
            case "list": 
                return (
                    <SelectField
                    type         = {data.type}
                    key          = {index}
                    label        = {data.label}
                    textLabel    = {data.textLabel}
                    id           = {data.id}
                    name         = {data.name}
                    optionArray  = {data.optionArray}
                    value        = {this.state[data.name]}
                    handleChange = {this.handleChange}
                    autocomplete = {data.autocomplete}
                    />
                )
            default: 
                    return <div></div>
        }
    });

    handleChange = async (event) => {
        console.log(event.target.value);
        
        await this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleChangeCheckbox = async (event) => {
         
        await this.setState({
            [event.target.value]: event.target.checked
        });
    }

    render(){
        return <div className = "Form">{this.renderInput(formField)}</div>

    }    
    
}
    

export default Form;