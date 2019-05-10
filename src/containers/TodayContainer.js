import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as todoActions from '../actions/todo';
import * as modalActions from '../actions/modal';
import * as weekActions from '../actions/week';

import TodayList from '../components/Today/TodayList';

class TodayContainer extends Component {
    render() {
        return <TodayList {...this.props}/>
    }
}

const mapStateToProps = state => ({
    ...state.weekReducer,
    ...state.todoReducers,
});

const mapDispatchToProps = dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch),
    ModalActions: bindActionCreators(modalActions, dispatch),
    WeekActions: bindActionCreators(weekActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodayContainer);