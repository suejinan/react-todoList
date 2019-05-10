import React, { Component } from 'react';
import TodoItem from '../Todo/TodoItem';

export default class TodoUncompletedList extends Component {
    /**
     * 할 일 내용 영역 토글 
     */
    onToggle = (todoId) => {
        this.props.TodoActions.handleToggle(todoId);
    }

    /**
     * 할 일 삭제
     */
    onRemove = (todoId) => {
        this.props.TodoActions.removeTodoItem(todoId);
    }

    /* 
     * 상세 편집 팝업
    */
    onEdit = (todoId) => {
        this.props.ModalActions.toggleModal();
        this.props.ModalActions.setEditItem(todoId);
    }

    onSubToggle = (item) => this.props.TodoActions.handleSubToggle(item);
    
    onDelSubItem = (item) => this.props.TodoActions.removeSubTodoItem(item);

    render() {
        const { dayItem } = this.props;

        return (
            <div>
                {
                    dayItem.length ?
                        dayItem.map(({ id, text, checked, date, subText })=>(
                            this.props.date === date &&
                                !checked &&
                                <TodoItem 
                                    key={id}
                                    todoId={id}
                                    text={text}
                                    checked={checked}
                                    subText={subText}
                                    {...this}
                                />
                        ))
                    : ''
                }
            </div>
        )
    }
}