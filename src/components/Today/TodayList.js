import React, { Component } from 'react';
import TodoItem from '../Todo/TodoItem';
import TodoForm from '../Todo/TodoForm';

export default class TodayList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoValue: '',
            today: new Date().toISOString().substring(0, 10)
        }
    }

    /**
     * Enter Key 이벤트
     */
    onKeyPress = (e) => {
        if(e.key === 'Enter') this.onCreateTodo();
    }

    /**
     * 할 일 값 핸들링
     */
    handleTodoItem = (e) => {
        this.setState({ todoValue: e.target.value });
    }

    /**
     * 할 일 추가 
     */
    onCreateTodo = () => {
        const item = {
            text: this.state.todoValue,
            date: this.state.today
        }
        this.props.WeekActions.createItemDate(item);
        this.setState({
            todoValue: ''
        });
    }

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
        const { todos } = this.props;
        const todayList = todos.filter(item => this.state.today === item.date);
        let completeList = todayList.filter(item => item.checked);
        let progress = completeList.length/todayList.length*100;
        
        return (
            <div>
                <h2>TODAY</h2>
                <div className="progress">
                    <div 
                        className="progress-bar bg-success" 
                        role="progressbar" 
                        style={{width: `${progress}%`}}
                        aria-valuenow={progress} 
                        aria-valuemin="0" 
                        aria-valuemax="100"></div>
                </div>
                <hr/>
                <div>
                    { todos.length ?
                        <div>
                            {
                                todos.map(({ id, text, checked, date, subText })=>(
                                    this.state.today === date && !checked &&
                                        <TodoItem 
                                            key={id}
                                            todoId={id}
                                            text={text}
                                            checked={checked}
                                            subText={subText}
                                            {...this}
                                        />
                                ))
                            }
                            {
                                todos.map(({ id, text, checked, date, subText })=>(
                                    this.state.today === date && checked &&
                                        <TodoItem 
                                            key={id}
                                            todoId={id}
                                            text={text}
                                            checked={checked}
                                            subText={subText}
                                            {...this}
                                        />
                                ))
                            }
                        </div>
                        : ''
                    }
                </div>
                <TodoForm
                    value={this.state.todoValue}
                    onChange={this.handleTodoItem}
                    onCreate={this.onCreateTodo}
                    onKeyPress={this.onKeyPress}
                />
            </div>
        )
    }
}