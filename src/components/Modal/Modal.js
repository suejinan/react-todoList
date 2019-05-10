import React from 'react';
import '../../styles/Modal.css';
import Form from './Form';
import EditForm from './EditForm';

const Modal = props => {
    if(!props.showModal) { return null }

    return(
        <div className="Backdrop">
            <div className="Addmodal">
                <h3 onClick={props.cancelEdit} className="close">&times;</h3>
                {
                    !props.editItem.length? 
                    <Form 
                        {...props}
                        onCreate ={props.onCreate}
                    />
                    : <EditForm 
                        {...props}
                        onModify ={props.onModify}
                        editItem={props.editItem[0]}
                        initSubItem={props.initSubItem}
                    />
                }
            </div>
        </div>
    )
}

export default Modal;