import React, { Component } from 'react';
import GroupForm from './GroupForm'
import GroupItem from './GroupItem'

class GroupList extends Component{

    state = {
        groupValue: ''
    };

    /**
     * Enter Key 이벤트
     */
    onKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.onCreateSubGroup();
        }
    }

    /**
     * 그룹 값(그룹 이름) 핸들링
     */
    handleGroupItem = (e) => {
        this.setState({
            groupValue: e.target.value
        });
    }

    /**
     * 그룹 추가 
     */
    onCreateSubGroup = () => {
        this.props.onCreateSubGroup(this.state.groupValue);
        this.setState({
            groupValue: ''
        });
    }

    /**
     * 그룹 삭제
     */
    onRemove = (groupId) => {
        this.props.onRemove(groupId);
    }

    /**
     * 그룹에 해당하는 할 일 목록 출력
     */
    showTodoList = (groupId, groupName) => {
        this.props.showTodoList(groupId, groupName);
    }

    render(){
        const { groupValue } = this.state;
        const { handleGroupItem, onCreateSubGroup, onKeyPress, onRemove, showTodoList } = this;
        const { groupItem } = this.props;
        
        return(
            <div className="group-form">
                {/* 그룹 추가 폼 */}
                <GroupForm
                    value={groupValue}
                    onChange={handleGroupItem}
                    onCreate={onCreateSubGroup}
                    onKeyPress={onKeyPress}
                />
                
                <div className="shadow-none p-1 mb-1 rounded group-list">
                    { 
                        /* 추가한 그룹 리스트 */
                        groupItem.map(
                            ({id, groupName}) => (
                                <GroupItem
                                    key={id}
                                    groupId={id}
                                    text={groupName}
                                    onRemove={onRemove}
                                    showTodoList={showTodoList}
                                />
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}

export default GroupList;