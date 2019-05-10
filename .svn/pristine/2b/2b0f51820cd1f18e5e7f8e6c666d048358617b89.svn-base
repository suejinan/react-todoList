import React, { Component } from 'react';

export default class SubItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onMouse: false,
            isOpen : false,
        }
    }

    handleEditBtn = bool => {
        this.setState({
            onMouse: bool
        })
    }
    
    render() {
        const { id, text, checked, onToggle, onRemove } = this.props;

        return(
            <div
                onMouseMove={() => this.handleEditBtn(true)}
                onMouseLeave={() => this.handleEditBtn(false)}
            >
                <div onClick={() => onToggle(id)}>
                    { 
                        checked ? 
                        <span>
                            <i className="far fa-check-circle"></i>&nbsp;
                            <del style={{margin: "0 10px"}}>{text}</del>
                        </span>
                        : <span>
                            <i className="far fa-circle"></i>&nbsp;
                            <span style={{margin: "0 10px"}}>{text}</span>
                        </span>
                    }
                    <span 
                        style={{color:"#f03e3e", }} 
                        onClick={(e)=> {
                            e.stopPropagation();
                            onRemove(id);
                        }} 
                        hidden={!this.state.onMouse}
                    ><i className="fas fa-times"></i></span>
                </div>
            </div>
        )
    }
}