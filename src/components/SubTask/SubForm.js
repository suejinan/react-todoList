import React, { Component } from 'react';

class SubForm extends Component {
    state = {
        itemValue:'',
    };

    handleKeyPress = e => {
        if(e.key === 'Enter') {
          this.handleSubmit(e);
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.itemValue) {
            this.props.onAddSubItem(this.state.itemValue);
        }
        return this.setState({itemValue: ''});
    }

    handleItemChange = e => {
        this.setState({
            itemValue: e.target.value,
        });
    }

    render() {
        return(
            <div className="form-group">
                <div className="form-inline">
                    <span style={{color:"#2b8a3e", fontSize : "1.5em"}}>&#43;</span>
                    <input 
                        className="subForm form-control form-control-sm"
                        type="text" 
                        value={this.state.itemValue}
                        onChange={this.handleItemChange}
                        onKeyPress={this.handleKeyPress}
                        placeholder="서브 작업 추가" 
                        />
                    <button
                        onClick={this.handleSubmit}
                        className="btn btn-sm" 
                        type="button"
                    >추가</button>
                </div>
            </div>
        )
    }
}

export default SubForm;