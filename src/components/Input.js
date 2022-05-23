import React, { useState } from 'react';
import "./input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from '../features/todoSlice';
import { v4 as uuidv4 } from 'uuid';


const Input = () => {
    
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    
    const addTodo = () => {
        console.log(`Ajout: ${input}`)

        dispatch(saveTodo({
            item: input,
            done: false,
            id: uuidv4()
        }))
    }
    
    return (
        <div className='input'>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addTodo}>Ajouter!!</button>
        </div>
    );
};

export default Input;