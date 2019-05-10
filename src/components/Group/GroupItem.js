import React, { Component } from 'react';

class GroupList extends Component {
    render() {

        /**
         * text : 그룹 이름
         * groupId : 그룹 id
         * onRemove : 그룹 삭제 이벤트
         * showTodoList : 그룹 별 할 일 조회
         */
        const { text, groupId, onRemove, showTodoList } = this.props;

        return (
            <div className="group-item" onClick={() => {showTodoList(groupId, text)}}>
                {text}
                { 
                    /* 기본 그룹 삭제 불가 */
                    groupId !== 0 &&
                    <span className="group-item-remove"
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove(groupId)
                        }}
                    >&nbsp;
                        <i className="far fa-times-circle"></i>
                    </span>
                }
            </div>
        );
    }
}

export default GroupList;