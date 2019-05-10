import React, { Component } from 'react';
import { connect } from 'react-redux';

import GroupList from '../components/Group/GroupList';
import * as groupActions from '../actions/groups';
import * as todoActions from '../actions/todo';

class GroupContainer extends Component{    
    render() {
        return(
            <div>
                <GroupList
                    onCreateSubGroup={this.props.onCreateSubGroup}      
                    groupItem = {this.props.groupReducers.groups}
                    onRemove = {this.props.onRemoveGroup}
                    showTodoList = {this.props.showTodoList}
                />
            </div>
        );  
    }
}

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    onCreateSubGroup: (groupValue) => {
        dispatch(groupActions.addGroupItem(groupValue))
    },
    onRemoveGroup: (groupId) => {
        dispatch(groupActions.removeGroupItem(groupId))
    },
    showTodoList: (groupId, groupName) => {
        dispatch(todoActions.showTodoList(groupId, groupName))
    }
});

const GroupFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupContainer);

export default GroupFormContainer;