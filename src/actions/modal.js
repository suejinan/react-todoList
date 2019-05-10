/*
 * Create/Modify Todo 
*/

// Toggle Window View
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SET_EDIT_ITEM = 'SET_EDITITEM';
export const CANCEL_EDIT = 'CANCEL_EDIT';
// Sub Task
export const TOGGLE_SUBITEM = 'TOGGLE_SUBITEM';
export const ADD_SUBITEM = 'ADD_SUBITEM';
export const DEL_SUBITEM = 'DEL_SUBITEM';
export const INIT_SUBITEM = 'INIT_SUBITEM';

// Create Item
export const CREATE_ITEM_MODAL = 'CREATE_ITEM_MODAL';
export const EDIT_ITEM = 'EDIT_ITEM';

export const toggleModal = () => ({type: TOGGLE_MODAL});
export const setEditItem = todoId => ({type: SET_EDIT_ITEM, todoId});
export const cancelEdit = () => ({type: CANCEL_EDIT});
export const toggleSubItem = subId => ({type: TOGGLE_SUBITEM, subId});
export const addSubItem = itemValue => ({type: ADD_SUBITEM, itemValue});
export const delSubItem = subId => ({type: DEL_SUBITEM, subId});
export const initSubItem = subTask => ({type: INIT_SUBITEM, subTask});
export const createItemModal = item => ({type: CREATE_ITEM_MODAL, item});
export const editItem = item => ({type: EDIT_ITEM, item});