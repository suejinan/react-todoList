import React, { Component } from 'react';
import SubItem from '../SubTask/SubItem';

class TodoItem extends Component {
    
    onSubToggle = (subId) => {
        let item = {
            id: this.props.todoId,
            groupId: this.props.groupId,
            subText: {id: subId}
        }
        this.props.onSubToggle(item);
    }

    onDelSubItem = (subId) => {
        let item = {
            id: this.props.todoId,
            groupId: this.props.groupId,
            subText: {id: subId}
        }
        this.props.onDelSubItem(item);
    }


    render() {
        /**
         * text: 할 일 내용
         * todoId: 할 일 id
         * checked: 할 일 체크 여부
         * onToggle: 할 일 내용 영역 토글
         * onRemove: 할 일 삭제
         */
        const { text, todoId, checked, subText, date, onToggle, onRemove, onEdit, groupId } = this.props;
        const today = Math.floor(new Date().getTime() / (1000*60*60*24));
        const endDate = new Date(date).getTime() / (1000*60*60*24);
        
        return (
            <div>
                <div className="todo-item">
                    <div className="shadow-none p-3 mb-5 rounded" onClick={() => onToggle(todoId, groupId)}>
                        { checked ?
                            <span>
                                <i className="far fa-check-circle"></i>&nbsp;
                                <del style={{margin: "0 10px"}}>{text}</del>
                            </span>
                            :
                            <span>
                                <i className="far fa-circle"></i>&nbsp;
                                <span style={{margin: "0 10px"}}>{text}</span>
                            </span>
                        }

                        {/* 상세 페이지 팝업 연동 */}
                        <span onClick={(e) => {
                            e.stopPropagation();
                            onEdit(todoId)
                        }}>
                            <i className="far fa-file-alt"></i>
                        </span>
                        { 
                            endDate < today
                            && <span style={{fontSize: '0.7em', color: '#ff0000', margin: '10px'}}>기간만료</span>
                        }
                        {/* 할 일 삭제 버튼 */}
                        <span className="todo-item-remove"
                            onClick={(e) => { 
                                e.stopPropagation();
                                onRemove(todoId, groupId)}}>
                            <i className="fas fa-times"/>
                        </span>
                    </div>
                </div>
                <div className="todo-subitemList">
                    {
                        subText.length?
                            subText.map((item)=>(
                                <SubItem 
                                    {...item}
                                    key={item.id}
                                    todoId
                                    onRemove={this.onDelSubItem}
                                    onToggle={this.onSubToggle}
                                />
                            ))
                            :''
                    }
                </div>
            </div>
        );
    }
}

export default TodoItem;