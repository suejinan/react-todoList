import React, { Component } from 'react';
import TodoUncompletedList from './TodoUncompletedList';
import TodoCompletedList from './TodoCompletedList';
import TodoForm from '../Todo/TodoForm';
import '../../styles/Week.css';

const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
class Day extends Component {
  state = {
    dayName : '',
    todoValue: '',
  }

  onKeyPress = (e) => {
    if(e.key === 'Enter') this.onCreateTodo();
  }

  handleTodoItem = (e) => {
    this.setState({todoValue: e.target.value});
  }

  onCreateTodo = () => {
      const item = {
        text: this.state.todoValue,
        date: this.props.date
      };
      this.props.WeekActions.createItemDate(item);
      this.setState({ todoValue: '' });
  }

  toDateString = (value) => {
    const date = new Date(value);
    this.setState({dayName: dayNames[date.getDay()]});
  }

  componentDidMount() {
    const {date} = this.props;
    this.toDateString(date);
  }

  render() {
    const { index, date} = this.props;

    return (
      <div className="card day-card">
        <div className="card-body">
          {
            index === 0 ?
              <h3 className="card-title">오늘</h3>
              : index === 1 ? 
                <h3 className="card-title">내일</h3>
              : <h3 className="card-title">{this.state.dayName}</h3>
          }
          <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
          <hr/>
          <TodoUncompletedList dayItem={this.props.totalList} {...this.props}/>
          <TodoCompletedList dayItem={this.props.totalList} {...this.props}/>
          <TodoForm
              value={this.state.todoValue}
              onChange={this.handleTodoItem}
              onCreate={this.onCreateTodo}
              onKeyPress={this.onKeyPress}
          />
        </div>
      </div>
    );
  }
}

export default Day;
