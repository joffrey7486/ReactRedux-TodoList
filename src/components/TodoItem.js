import React from 'react';
import "./todoItem.css"
import CheckBox from '@material-ui/core/Checkbox';
import { useDispatch } from "react-redux";
import { setCheck } from '../features/todoSlice'

const TodoItem = ({ name, done, id }) => {

    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))
    }
    
    return (

        <div className='todoItem'>
            
            <CheckBox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />

            <p className={done && 'todoItem-done'}>{name}</p>
        </div>
    );
};

export default TodoItem;