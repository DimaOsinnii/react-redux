import React from "react";
import {useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../actions";

export const styleRed = {borderColor: 'red', outline: 'none'};
export const styleBlack = {borderColor: 'black', outline: 'none'};

let AddTodo = ({addTodo}) => {

    let [inputValue, setValue] = useState('');
    let [style, setStyle] = useState(styleBlack);

    const addTodoWithEnter = (event) => {
        let {value} = event.target;
        value = value.trim();
        if (event.key === 'Enter') {
            if (value) {
                setStyle(styleBlack);
                addTodo(value);
                return setValue('');
            }
            return setStyle(styleRed);
        }
    };

    const onChange = (e) => {
        setValue(e.target.value.trimLeft());
        setStyle(styleBlack);
    }

    const onClick = () => {
        inputValue = inputValue.trim();
        if (inputValue !== '') {
            addTodo(inputValue);
            return setValue('');
        }
        return setStyle(styleRed);
    }

    return (
        <div>
            <input
                value={inputValue}
                onKeyPress={addTodoWithEnter}
                onFocus={() => setStyle(styleBlack)}
                onBlur={() => setStyle(styleBlack)}
                onChange={onChange}
                style={style}
            />
            <button onClick={onClick}>AddTodo</button>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    addTodo: value => dispatch(addTodo(value))
});

export default AddTodo = connect(null, mapDispatchToProps)(AddTodo);