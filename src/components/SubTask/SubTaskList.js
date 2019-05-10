import React, { Component } from 'react';
import SubItem from './SubItem';
import SubForm from './SubForm';

export default class SubTaskList extends Component {
    render() {
        const { items } = this.props;
        return (
            <div>
                <label>Sub Task</label>
                {items.length ?
                    <div className="subItem" style={{maxHeight: "100px", overflow: "auto" }}>
                        {
                            items.map((item)=>(
                                <SubItem 
                                    {...item}
                                    key={item.id} 
                                    onRemove={this.props.onDelSubItem}
                                    onToggle={this.props.onSubToggle}
                                />
                            ))
                        }
                    </div>
                    : ''
                }
                <SubForm 
                    onAddSubItem={this.props.onAddSubItem}
                />
            </div>
        )
    }
}