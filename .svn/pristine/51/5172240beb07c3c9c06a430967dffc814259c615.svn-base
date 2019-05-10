import React, { Component } from 'react';
import Select from './Select';
import SubTaskList from '../SubTask/SubTaskList';
import Star from './Star';

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: '',
            groupId: 0,
            groupName: '기본 그룹',
            date: '',
            memo: '',
            isImportant: false
        }
    }
    
    handleStar = () => this.setState({ isImportant: !this.state.isImportant });

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleSelect = e => this.setState({groupId: e.target.value, groupName: e.target.options[e.target.value].text});
    
    handleCreate = (e) => {
        e.preventDefault();
        this.setState({ subText: this.props.subTask });
        this.props.onCreate(this.state);
    }
    
    render() {
        return (
            <form onSubmit={this.handleCreate}>
                <div className="modalContent">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            value={this.state.title}
                            name="text"
                            onChange={this.handleChange}
                            placeholder="Insert your New Task"
                            autoFocus
                            required
                        />
                        <div className="input-group-append">
                            <Star onClick={this.handleStar} isImportant={this.state.isImportant}/>
                        </div>
                    </div>
                    <div className="form-row" style={{ margin: '20px 0 auto', height:210}}>
                        <div className="form-group col-6">
                            <SubTaskList 
                                items={this.props.subTask} 
                                onAddSubItem={this.props.ModalActions.addSubItem}
                                onSubToggle={this.props.ModalActions.toggleSubItem}
                                onDelSubItem={this.props.ModalActions.delSubItem}
                            />
                        </div>
                        <div className="form-group col-6">
                            <div className="form-row">
                                <Select groups={this.props.groups} onChange={this.handleSelect}/>
                            </div>
                            <div className="form-row">
                                <label><i className="far fa-calendar-alt"></i>&nbsp;End Date</label>
                                <input
                                    type="date"
                                    className="form-control form-control-sm"
                                    value={this.state.date}
                                    name="date"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Memo</label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.memo}
                            name="memo"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="modalFooter">
                    <button 
                        className="modalSave"
                        type="submit"
                    >SAVE</button>
                </div>
            </form>
        )
    }
} 

export default Form;