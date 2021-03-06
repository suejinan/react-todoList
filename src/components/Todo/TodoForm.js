import React from 'react';

const TodoForm = ({value, onChange, onCreate, onKeyPress, groupId}) => {
    return(
        <div>
            <div className="form-group form-group-sm">
                <span className="todoPlusBtn" style={{color:"#2b8a3e", fontSize : "1.9em", float:"left"}}>&#x2b;</span>
                <input className="todo-insert-form form-control" placeholder="할 일 추가" value={value} 
                onChange={onChange} onKeyPress={(e) => onKeyPress(e, groupId)}/>
                <button className="btn btn-sm" type="button" onClick={() => onCreate(groupId)}>추가</button>        
            </div>
        </div>
    )
}

export default TodoForm;