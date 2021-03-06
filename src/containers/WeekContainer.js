import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as weekActions from '../actions/week';
import * as todoActions from '../actions/todo';
import * as modalActions from '../actions/modal';
import NextSevenDays from '../components/Week/NextSevenDays';

class WeekContainer extends Component {
    render() {
        return <NextSevenDays {...this.props}/>
    }
}

const mapStateToProps = state => ({
    totalList: state.todoReducers.todos,
    editTodo: state.todoReducers.editTodo
});

const mapDispatchToProps = dispatch => ({
    WeekActions: bindActionCreators(weekActions, dispatch),
    TodoActions: bindActionCreators(todoActions, dispatch),
    ModalActions: bindActionCreators(modalActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeekContainer);