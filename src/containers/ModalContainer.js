import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as modalActions from '../actions/modal';

import Modal from '../components/Modal/Modal';
import NewButton from '../components/TopBar/newBtn';

class ModalContainer extends Component {

    handleToggle = () => {
        this.props.ModalActions.toggleModal();
    };

    handleCancel = () => {
        this.props.ModalActions.cancelEdit();
        this.handleToggle();
    }

    //할 일 생성
    handleCreate = (item) => {
        item = {
            ...item,
            subText: this.props.subTask
        }
        this.props.ModalActions.createItemModal(item);
        this.handleToggle();    //닫기
    };

    //할 일 수정
    handleModify = (item) => {
        item = {
            ...item,
            subText: this.props.subTask
        }
        this.props.ModalActions.editItem(item);
        this.handleToggle();    //닫기
    };

    //수정시 해당 하위 할 일 세팅
    initSubItem = (subTask) => {
        this.props.ModalActions.initSubItem(subTask)
    }
    
    render() {

        return(
            <div>
                <NewButton onClick={this.handleToggle}/>
                <Modal 
                    {...this.props}
                    onCreate ={this.handleCreate}
                    onModify={this.handleModify}
                    initSubItem={this.initSubItem}
                    cancelEdit={this.handleCancel}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.modalReducer,
    groups: state.groupReducers.groups,
    editItem : state.todoReducers.editTodo
});

const mapDispatchToProps = dispatch => ({
    ModalActions: bindActionCreators(modalActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalContainer);