import React, { Component } from 'react';

const Option = ({group}) => (
    <option value={group.id}>{group.groupName}</option>
)

class Select extends Component {
    handleChange = e => {
        const { onChange } = this.props;
        if(onChange && e.target.value) {
            console.log(e.target.options[e.target.value].text);
            onChange(e);
        }
    }

    render() {
        
        return(
            <div className="form-group">
                <label><i className="far fa-folder-open"></i>&nbsp;Group</label>
                <select 
                    className="form-control form-control-sm" 
                    name="groupId"
                    onChange={this.handleChange}
                    value={this.props.selectedValue}
                >
                    {this.props.groups.map(group=>(
                        <Option 
                            group={group}
                            key={group.id}
                            optionState
                        />
                    ))}
                </select>
            </div>
        )
    }
}

export default Select;